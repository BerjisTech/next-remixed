"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

/**
 * Types for Broadcaster, Viewer, etc.
 */
export interface Viewer {
  id: string;
  name: string;
}

export interface Broadcaster {
  id: string;
  viewers: Viewer[];
  user_id: string;
  socket_id: string;
  name?: string;
  viewerCount?: number;
}

/**
 * The main hook that handles:
 *  - Socket.io connection to /signal
 *  - Room events (createRoom, joinRoom, leaveRoom)
 *  - Streaming events (start-stream, join-stream, offers, answers, etc.)
 *  - Chat & reaction
 *  - local/remote MediaStream setup
 */
export function useStreaming() {
  // The Socket.io reference
  const [socket, setSocket] = useState<Socket | null>(null);

  // List of current broadcasters
  const [broadcasters, setBroadcasters] = useState<Broadcaster[]>([]);

  // For local camera/microphone
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);

  // A map of peerConnections (key = remoteUser's socket ID)
  const peerConnectionsRef = useRef<Map<string, RTCPeerConnection>>(new Map());

  // State for chat messages (stream-chat)
  const [chatMessages, setChatMessages] = useState<{ name: string; message: string }[]>([]);

  // State for “stream-reaction”
  const [reactions, setReactions] = useState<{ user_id: string; reaction: string }[]>([]);

  // A “configuration” for RTC peer connections
  const rtcConfig: RTCConfiguration = {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" },
    ],
  };

  // ----------------------------------------------------
  // 1. INITIALIZE SOCKET CONNECTION
  // ----------------------------------------------------
  useEffect(() => {
    const newSocket = io("https://nichapie.com/signal", {
      path: "/socket.io",
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 10000,
      forceNew: true,
      autoConnect: false,
    });

    // Try to connect manually
    newSocket.connect();

    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to /next/signal namespace");
      // Request any existing broadcasters
      newSocket.emit("request-broadcasters");
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected from /next/signal");
    });

    // Clean up on unmount
    return () => {
      newSocket.disconnect();
      // close all PeerConnections
      peerConnectionsRef.current.forEach((pc) => {
        if (pc.signalingState !== "closed") {
          pc.close();
        }
      });
      peerConnectionsRef.current.clear();
    };
  }, []);

  // ----------------------------------------------------
  // 2. LISTEN FOR SERVER EVENTS
  // ----------------------------------------------------
  useEffect(() => {
    if (!socket) return;

    // Updated list of all active broadcasters
    socket.on("broadcaster-available", (list: Broadcaster[]) => {
      console.log("Received updated broadcaster list =>", list);
      setBroadcasters(list || []);
    });

    // Another viewer joined *my* broadcast => create an offer for them
    socket.on("viewer-joined", ({ viewer_id }) => {
      console.log("Viewer joined =>", viewer_id);
      // If I'm broadcasting, create a new RTCPeerConnection and send a stream-offer
      createBroadcastOffer(viewer_id);
    });

    // Incoming “stream-offer” from broadcaster
    socket.on("stream-offer", async ({ offer, sender_id }) => {
      console.log("Received stream-offer => from:", sender_id);
      const pc = getOrCreatePeerConnection(sender_id, false); // I'm the viewer
      if (pc.signalingState !== "closed") {
        await pc.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socket.emit("stream-answer", {
          target_id: sender_id,
          answer,
        });
      }
    });

    // Incoming “stream-answer” from viewer
    socket.on("stream-answer", async ({ answer, sender_id }) => {
      console.log("Received stream-answer => from:", sender_id);
      const pc = peerConnectionsRef.current.get(sender_id);
      if (pc && pc.signalingState !== "closed") {
        await pc.setRemoteDescription(new RTCSessionDescription(answer));
      }
    });

    // ICE candidates
    socket.on("stream-ice-candidate", async ({ candidate, sender_id }) => {
      console.log("Received ICE candidate => from:", sender_id);
      const pc = peerConnectionsRef.current.get(sender_id);
      if (pc && pc.signalingState !== "closed") {
        try {
          await pc.addIceCandidate(new RTCIceCandidate(candidate));
        } catch (err) {
          console.error("Error adding ICE candidate =>", err);
        }
      }
    });

    // Chat messages
    socket.on("stream-chat", ({ name, message }) => {
      console.log("Received stream-chat =>", name, message);
      setChatMessages((prev) => [...prev, { name, message }]);
    });

    // Reactions
    socket.on("stream-reaction", ({ user_id, reaction }) => {
      console.log("Received stream-reaction =>", reaction);
      setReactions((prev) => [...prev, { user_id, reaction }]);
    });

    // A viewer left the broadcast
    socket.on("viewer-left", ({ viewer_id }) => {
      console.log("Viewer left =>", viewer_id);
      cleanupConnection(viewer_id);
    });

    // Broadcaster disconnected
    socket.on("broadcaster-disconnected", ({ broadcaster_id }) => {
      console.log("Broadcaster disconnected =>", broadcaster_id);
      cleanupConnection(broadcaster_id);
    });

    return () => {
      // Remove all listeners
      socket.off("broadcaster-available");
      socket.off("viewer-joined");
      socket.off("stream-offer");
      socket.off("stream-answer");
      socket.off("stream-ice-candidate");
      socket.off("stream-chat");
      socket.off("stream-reaction");
      socket.off("viewer-left");
      socket.off("broadcaster-disconnected");
    };
  }, [socket]);

  // ----------------------------------------------------
  // 3. ROOM EVENTS (optional)
  // ----------------------------------------------------
  const createRoom = useCallback(
    (room_name: string, user_id: string) => {
      if (!socket) return;
      console.log("Creating room =>", room_name, user_id);
      socket.emit("createRoom", { room_name, user_id });
    },
    [socket]
  );

  const joinRoom = useCallback(
    (room_name: string, user_id: string) => {
      if (!socket) return;
      console.log("Joining room =>", room_name, user_id);
      socket.emit("joinRoom", { room_name, user_id });
    },
    [socket]
  );

  const leaveRoom = useCallback(
    (room_name: string, user_id: string) => {
      if (!socket) return;
      console.log("Leaving room =>", room_name, user_id);
      socket.emit("leaveRoom", { room_name, user_id });
    },
    [socket]
  );

  // ----------------------------------------------------
  // 4. START BROADCAST (my camera)
  // ----------------------------------------------------
  const startBroadcast = useCallback(
    async (videoElement: HTMLVideoElement, userId: string) => {
      if (!socket) return;
      try {
        // get local media
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        videoElement.srcObject = stream;
        await videoElement.play();
        setLocalStream(stream);

        console.log("Sending start-stream => user_id:", userId);
        socket.emit("start-stream", { user_id: userId });
      } catch (err) {
        console.error("Failed to start broadcast =>", err);
        throw err;
      }
    },
    [socket]
  );

  // ----------------------------------------------------
  // 5. JOIN BROADCAST (someone else’s camera)
  // ----------------------------------------------------
  /**
   * Join a broadcaster's stream => we become a viewer.
   * We will create a new RTCPeerConnection & wait for an offer.
   */
  const joinBroadcast = useCallback(
    async (broadcasterId: string, videoElement: HTMLVideoElement, viewerName: string) => {
      if (!socket) return;
      // Clean up old connections if any
      cleanupConnection(broadcasterId);

      // Create new peer connection so we can receive remote track
      const pc = getOrCreatePeerConnection(broadcasterId, true, videoElement);

      // Tell the server we want to join
      socket.emit("join-stream", {
        broadcaster_id: broadcasterId,
        viewer: { id: "", name: viewerName },
      });
    },
    [socket]
  );

  // ----------------------------------------------------
  // 6. CREATE BROADCAST OFFER => Called when “viewer-joined”
  // ----------------------------------------------------
  async function createBroadcastOffer(viewerId: string) {
    if (!socket) return;
    const pc = getOrCreatePeerConnection(viewerId, false);

    // If we have a localStream, attach tracks
    if (localStream) {
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream as MediaStream);
      });
    }

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    socket.emit("stream-offer", {
      target_id: viewerId,
      offer,
    });
  }

  // ----------------------------------------------------
  // 7. CREATE OR GET PEER CONNECTION
  //    - If I'm broadcaster => I attach local tracks
  //    - If I'm viewer => I attach remote tracks to a <video> element
  // ----------------------------------------------------
  function getOrCreatePeerConnection(
    targetId: string,
    isViewer: boolean,
    videoElement?: HTMLVideoElement
  ): RTCPeerConnection {
    // Already have a PC for this user?
    let pc = peerConnectionsRef.current.get(targetId);
    if (pc) return pc;

    // Create new
    pc = new RTCPeerConnection(rtcConfig);

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket?.emit("stream-ice-candidate", {
          target_id: targetId,
          candidate: event.candidate,
        });
      }
    };

    // For viewers, we want to handle remote tracks
    if (isViewer && videoElement) {
      pc.ontrack = (event) => {
        console.log("Viewer ontrack =>", event.streams[0]);
        if (event.streams[0]) {
          videoElement.srcObject = event.streams[0];
        }
      };
    }

    pc.oniceconnectionstatechange = () => {
      console.log("ICE State =>", pc?.iceConnectionState);
      if (pc?.iceConnectionState === "failed" || pc?.iceConnectionState === "closed") {
        cleanupConnection(targetId);
      }
    };

    peerConnectionsRef.current.set(targetId, pc);
    return pc;
  }

  // ----------------------------------------------------
  // 8. CLEANUP A CONNECTION
  // ----------------------------------------------------
  function cleanupConnection(targetId: string) {
    const pc = peerConnectionsRef.current.get(targetId);
    if (pc) {
      if (pc.signalingState !== "closed") {
        pc.close();
      }
      peerConnectionsRef.current.delete(targetId);
    }
  }

  // ----------------------------------------------------
  // 9. LEAVE BROADCAST
  // ----------------------------------------------------
  const leaveBroadcast = useCallback(
    (broadcasterId: string) => {
      if (!socket) return;
      socket.emit("leave-stream", { broadcaster_id: broadcasterId });
      cleanupConnection(broadcasterId);
    },
    [socket]
  );

  // ----------------------------------------------------
  // 10. CLEANUP ALL => Stop local tracks, remove peerConns
  // ----------------------------------------------------
  const cleanupAllStreams = useCallback(() => {
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
    }
    setLocalStream(null);

    peerConnectionsRef.current.forEach((pc, id) => {
      if (pc.signalingState !== "closed") pc.close();
    });
    peerConnectionsRef.current.clear();
  }, [localStream]);

  // ----------------------------------------------------
  // 11. CHAT & REACTION
  // ----------------------------------------------------
  const sendChatMessage = useCallback(
    (message: string, broadcasterId: string, senderName: string) => {
      if (!socket) return;
      socket.emit("stream-chat", {
        message,
        broadcaster_id: broadcasterId,
        name: senderName,
      });
      // Optionally add to local chat
      setChatMessages((prev) => [...prev, { name: senderName, message }]);
    },
    [socket]
  );

  const sendReaction = useCallback(
    (reaction: string) => {
      if (!socket) return;
      socket.emit("stream-reaction", reaction);
    },
    [socket]
  );

  // ----------------------------------------------------
  // 12. RETURN HOOK API
  // ----------------------------------------------------
  return {
    // States
    socket,
    broadcasters,
    chatMessages,
    reactions,
    localStream,

    // Room actions
    createRoom,
    joinRoom,
    leaveRoom,

    // Broadcasting
    startBroadcast,
    joinBroadcast,
    leaveBroadcast,
    cleanupAllStreams,

    // Chat & reaction
    sendChatMessage,
    sendReaction,
  };
}
