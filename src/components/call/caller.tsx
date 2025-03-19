"use client";

import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { toast } from "sonner";

interface Profile {
  user_id: string;
}

interface ConnectedUser {
  user_id: string;
  socket_id: string;
}

interface Message {
  user_id: string;
  message: string;
}

interface Reaction {
  user_id: string;
  reaction: string;
  left: number;
}

interface RemoteStream {
  id: string;
  stream: MediaStream;
  user_id: string;
}

interface Room {
  name: string;
}

const Caller = () => {
  // State variables
  const [user, setUser] = useState<Profile>({
    user_id: Math.random().toString(36).substring(2, 15),
  });
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStreams, setRemoteStreams] = useState<RemoteStream[]>([]);
  const [peerConnections, setPeerConnections] = useState<{
    [socket_id: string]: RTCPeerConnection;
  }>({});
  const [dataChannels, setDataChannels] = useState<{ [socket_id: string]: RTCDataChannel }>({});
  const [connectedUsers, setConnectedUsers] = useState<ConnectedUser[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatMessage, setChatMessage] = useState("");
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isInCall, setIsInCall] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [showSideChat, setShowSideChat] = useState(false);
  const [sideChatTag, setSideChatTag] = useState("chat");
  const [showReactions, setShowReactions] = useState(false);
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [showAudioDevices, setShowAudioDevices] = useState(false);
  const [showVideoDevices, setShowVideoDevices] = useState(false);
  const [selectedAudioDeviceId, setSelectedAudioDeviceId] = useState("");
  const [selectedVideoDeviceId, setSelectedVideoDeviceId] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInitiator, setIsInitiator] = useState(false);
  const [videoSizes, setVideoSizes] = useState({ width: 1, height: 1 });
  const [roomError, setRoomError] = useState("");
  const pathname = usePathname();
  const params = useParams();
  const name = params?.room_id as string;

  // Refs
  const socketRef = useRef<Socket | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnectionsRef = useRef<{ [socket_id: string]: RTCPeerConnection }>({});
  const dataChannelsRef = useRef<{ [socket_id: string]: RTCDataChannel }>({});

  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    // This code runs only on the client side
    setBaseUrl(window.location.origin);
  }, []);

  // Initialize socket connection
  useEffect(() => {
    socketRef.current = io("https://nichapie.com/signal/", {
      path: "socket.io",
      transports: ["websocket"],
    });
    console.log("Connecting to signaling server");

    socketRef.current.on("connect", () => {
      console.log("Connected to signaling server");
    });

    socketRef.current.on("disconnect", () => {
      console.log("Disconnected from signaling server");
    });

    socketRef.current.on("connect_error", (error: Error) => {
      console.error("Connection error:", error);
    });

    socketRef.current.on("error", (error: Error) => {
      console.error("Socket error:", error);
    });

    return () => {
      if (socketRef.current) {
        console.log("Disconnecting from signaling server");
        socketRef.current.disconnect();
      }
    };
  }, []);

  // Setup signaling handlers
  useEffect(() => {
    if (!socketRef.current) {
      console.log("Socket connection not available");
      return;
    }

    // Handle offers
    socketRef.current.on("offer", (data) => {
      console.log("Received offer:", data);
      handleOffer(data);
    });

    // Handle answers
    socketRef.current.on("answer", (data) => {
      console.log("Answer received:", data);
      handleAnswer(data);
    });

    // Handle ICE candidates
    socketRef.current.on("ice-candidate", (data) => {
      console.log("Received ICE candidate:", data);
      handleIceCandidate(data);
    });

    // Handle user joined
    socketRef.current.on("userJoined", async (data) => {
      console.log("User joined:", data);
      setConnectedUsers((prevUsers) => {
        if (!prevUsers.some((user) => user.socket_id === data.socket_id)) {
          console.log("Adding user to connected users:", data);
          return [...prevUsers, { user_id: data.user_id, socket_id: data.socket_id }];
        } else {
          console.log("User already exists in connected users:", data);
        }
        console.log("Connected users:", prevUsers);
        return prevUsers;
      });

      setIsInitiator(false); // Existing user
      await createPeerConnection(data.socket_id);
    });

    // Handle existing users
    socketRef.current.on("existingUsers", async (users) => {
      console.log("Existing users:", users);
      setConnectedUsers((prevUsers) => {
        const newUsers = [...prevUsers];
        for (const user of users) {
          console.log("Adding existing user to connected users:", user);
          if (!newUsers.some((u) => u.socket_id === user.socket_id)) {
            newUsers.push({ user_id: user.user_id, socket_id: user.socket_id });
          }
        }
        return newUsers;
      });

      for (const user of users) {
        setIsInitiator(true); // New user
        const peerConnection = await createPeerConnection(user.socket_id);
        console.log("Created peer connection:", peerConnection);

        // New user initiates the offer
        const offer = await peerConnection.createOffer();
        console.log("Created offer:", offer);
        await peerConnection.setLocalDescription(offer);
        if (socketRef.current) {
          console.log("Sending offer to existing user:", user);
          socketRef.current.emit("offer", { receiver_id: user.socket_id, offer });
        } else {
          console.warn("Socket connection not available");
        }
      }
    });

    // Handle user left
    socketRef.current.on("userLeft", (data) => {
      closePeerConnection(data.socket_id);
      console.log("User left:", data);
      setConnectedUsers((prevUsers) =>
        prevUsers.filter((user) => user.socket_id !== data.socket_id)
      );
    });

    // Handle chat messages
    socketRef.current.on("chatMessage", (data) => {
      console.log("Received chat message:", data);
      setMessages((prevMessages) => [
        ...prevMessages,
        { user_id: data.user_id, message: data.message },
      ]);
    });

    // Handle reactions
    socketRef.current.on("receiveReaction", (data) => {
      console.log("Received reaction:", data);
      const newReactions: Reaction[] = [];
      for (let i = 0; i < 5; i++) {
        newReactions.push({
          user_id: data.user_id,
          reaction: data.reaction,
          left: getRandomPosition(),
        });
      }
      setReactions((prevReactions) => [...prevReactions, ...newReactions]);
    });

    // Handle admin actions
    socketRef.current.on("adminAction", (data) => {
      console.log("Received admin action:", data);
      handleAdminAction(data);
    });

    // Handle admin assignment
    socketRef.current.on("adminAssigned", () => {
      console.log("You have been assigned as the admin");
      setIsAdmin(true);
    });

    // Handle kicked
    socketRef.current.on("kicked", () => {
      hangUp();
      toast.error("You have been kicked from the room");
    });

    // Handle room join error
    socketRef.current.on("roomJoinError", async (error) => {
      console.log("Room join error:", error);
      setRoomError(error);
      await createRoom();
    });

    return () => {
      if (socketRef.current) {
        console.log("Removing signaling handlers");
        socketRef.current.off("offer");
        socketRef.current.off("answer");
        socketRef.current.off("ice-candidate");
        socketRef.current.off("userJoined");
        socketRef.current.off("existingUsers");
        socketRef.current.off("userLeft");
        socketRef.current.off("chatMessage");
        socketRef.current.off("receiveReaction");
        socketRef.current.off("adminAction");
        socketRef.current.off("adminAssigned");
        socketRef.current.off("kicked");
        socketRef.current.off("roomJoinError");
      }
    };
  }, []);

  // Initialize the call
  useEffect(() => {
    joinRoom();
    listDevices();
    updateVideoSizes();

    return () => {
      hangUp();
    };
  }, [name]);

  // Update video sizes when remote streams change
  useEffect(() => {
    updateVideoSizes();
  }, [remoteStreams]);

  // Setup local video when stream is available
  useEffect(() => {
    if (localStream && localVideoRef.current) {
      console.log("Setting local video stream");
      localVideoRef.current.srcObject = localStream;
      localVideoRef.current.muted = true;
    }
  }, [localStream]);

  // Handle reactions disappearing over time
  useEffect(() => {
    if (reactions.length > 0) {
      const timer = setTimeout(() => {
        setReactions([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [reactions]);

  // Update peer connections ref when state changes
  useEffect(() => {
    peerConnectionsRef.current = peerConnections;
  }, [peerConnections]);

  // Update data channels ref when state changes
  useEffect(() => {
    dataChannelsRef.current = dataChannels;
  }, [dataChannels]);

  // Functions for signaling
  const joinRoom = async (retryCount = 3) => {
    if (!socketRef.current) {
      console.log("Room not available", socketRef.current);
      return;
    }

    setIsInitiator(true); // New user
    socketRef.current.emit("joinRoom", { room_name: name, user_id: user.user_id });

    try {
      setIsInCall(true);
      const constraints = {
        audio: { deviceId: selectedAudioDeviceId || undefined },
        video: { deviceId: selectedVideoDeviceId || undefined },
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setLocalStream(stream);
    } catch (error: any) {
      setIsInCall(false);
      let errorMessage = "Error accessing media devices. Please check your settings and try again.";
      if (error.name === "NotAllowedError") {
        errorMessage =
          "Permission to access media devices was denied. Please allow access and try again.";
      } else if (error.name === "NotFoundError") {
        errorMessage =
          "No media devices found. Please connect a microphone and/or camera and try again.";
      } else if (error.name === "NotReadableError") {
        errorMessage =
          "Media device is currently in use by another application. Please close other applications and try again.";
      }
      toast.error(errorMessage);
      console.error("Error accessing media devices:", error);

      // Retry joining the room if there are retries left
      if (retryCount > 0) {
        console.log(`Retrying to join the room. Attempts left: ${retryCount}`);
        setTimeout(() => joinRoom(retryCount - 1), 2000); // Retry after 2 seconds
      } else {
        toast.error("Failed to join the room. Please try again later.");
      }
    }
  };

  const createRoom = async () => {
    if (!socketRef.current) return;
    socketRef.current.emit("createRoom", { room_name: name, user_id: user.user_id });
    console.log;
    await joinRoom();
  };

  const createPeerConnection = async (socket_id: string): Promise<RTCPeerConnection> => {
    if (peerConnectionsRef.current[socket_id]) {
      console.warn(`Peer connection with ${socket_id} already exists.`);
      return peerConnectionsRef.current[socket_id];
    }

    const peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    // Update state
    setPeerConnections((prev) => ({ ...prev, [socket_id]: peerConnection }));
    peerConnectionsRef.current = { ...peerConnectionsRef.current, [socket_id]: peerConnection };

    // Add local stream tracks
    if (localStream) {
      localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
      });
    }

    // Handle ICE candidates
    peerConnection.onicecandidate = (event) => {
      if (event.candidate && socketRef.current) {
        socketRef.current.emit("ice-candidate", {
          receiver_id: socket_id,
          candidate: event.candidate,
        });
      }
    };

    // Handle remote streams
    peerConnection.ontrack = (event) => {
      console.log("Received remote stream:", event);
      let found = false;
      setRemoteStreams((prevStreams) => {
        const newStreams = [...prevStreams];
        let remoteStream = newStreams.find((s) => s.id === socket_id);
        if (remoteStream) {
          console.log("Adding track to existing stream:", remoteStream);
          found = true;
          remoteStream.stream.addTrack(event.track);
        } else {
          console.log("Creating new stream for track:", event);
        }
        return newStreams;
      });

      if (!found) {
        console.warn("Creating new stream for track:", event);
        const newStream = new MediaStream();
        newStream.addTrack(event.track);
        const user_id =
          connectedUsers.find((u) => u.socket_id === socket_id)?.user_id || "Unknown User";

        setRemoteStreams((prevStreams) => [
          ...prevStreams,
          { id: socket_id, stream: newStream, user_id },
        ]);
      } else {
        console.log("Remote streams:", remoteStreams);
      }
    };

    if (isInitiator) {
      // Create data channel
      const dataChannel = peerConnection.createDataChannel("chat");
      setDataChannels((prev) => ({ ...prev, [socket_id]: dataChannel }));
      dataChannelsRef.current = { ...dataChannelsRef.current, [socket_id]: dataChannel };

      dataChannel.onmessage = (e) => {
        const messageData = JSON.parse(e.data);
        if (messageData.type === "chat") {
          setMessages((prevMessages) => [
            ...prevMessages,
            { user_id: messageData.user_id, message: messageData.message },
          ]);
        }
      };
    } else {
      // Handle data channels
      peerConnection.ondatachannel = (event) => {
        const dataChannel = event.channel;
        dataChannel.onmessage = (e) => {
          const messageData = JSON.parse(e.data);
          if (messageData.type === "chat") {
            setMessages((prevMessages) => [
              ...prevMessages,
              { user_id: messageData.user_id, message: messageData.message },
            ]);
          }
        };
        setDataChannels((prev) => ({ ...prev, [socket_id]: dataChannel }));
        dataChannelsRef.current = { ...dataChannelsRef.current, [socket_id]: dataChannel };
      };
    }

    return peerConnection;
  };

  const handleOffer = async (data: any) => {
    const { sender_id, sender_user_id, offer } = data;
    let peerConnection = peerConnectionsRef.current[sender_id];

    if (!peerConnection) {
      setIsInitiator(false);
      peerConnection = await createPeerConnection(sender_id);
    } else if (peerConnection.signalingState !== "stable") {
      console.warn(`Cannot handle offer in state ${peerConnection.signalingState}`);
      return;
    }

    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);

    if (socketRef.current) {
      socketRef.current.emit("answer", { receiver_id: sender_id, answer });
    }
  };

  const handleAnswer = async (data: any) => {
    console.log("Received answer:", data);
    const { sender_id, answer } = data;
    const peerConnection = peerConnectionsRef.current[sender_id];

    if (peerConnection && peerConnection.signalingState === "have-local-offer") {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    } else if (peerConnection) {
      console.warn(`Cannot set remote description in state ${peerConnection.signalingState}`);
    }
  };

  const handleIceCandidate = async (data: any) => {
    console.log("Received ICE candidate:", data);
    const { sender_id, candidate } = data;
    const peerConnection = peerConnectionsRef.current[sender_id];

    if (peerConnection) {
      await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    }
  };

  const closePeerConnection = (socket_id: string) => {
    console.log("Closing peer connection:", socket_id);
    const peerConnection = peerConnectionsRef.current[socket_id];
    if (peerConnection) {
      peerConnection.close();

      // Update state
      setPeerConnections((prev) => {
        const newConnections = { ...prev };
        delete newConnections[socket_id];
        return newConnections;
      });

      delete peerConnectionsRef.current[socket_id];
    }

    // Remove the remote stream
    setRemoteStreams((prevStreams) => prevStreams.filter((s) => s.id !== socket_id));
  };

  const listDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setAudioDevices(devices.filter((device) => device.kind === "audioinput"));
      setVideoDevices(devices.filter((device) => device.kind === "videoinput"));
    } catch (error) {
      console.error("Error listing devices:", error);
    }
  };

  const updateMediaStream = async () => {
    try {
      const constraints = {
        audio: { deviceId: selectedAudioDeviceId || undefined },
        video: { deviceId: selectedVideoDeviceId || undefined },
      };
      const newStream = await navigator.mediaDevices.getUserMedia(constraints);

      // Replace tracks in peer connections
      Object.values(peerConnectionsRef.current).forEach((pc) => {
        const senders = pc.getSenders();
        const audioSender = senders.find((s) => s.track?.kind === "audio");
        const videoSender = senders.find((s) => s.track?.kind === "video");

        if (audioSender && newStream.getAudioTracks()[0]) {
          audioSender.replaceTrack(newStream.getAudioTracks()[0]);
        }
        if (videoSender && newStream.getVideoTracks()[0]) {
          videoSender.replaceTrack(newStream.getVideoTracks()[0]);
        }
      });

      // Update local stream
      setLocalStream(newStream);

      // Close device selection dropdowns
      setShowAudioDevices(false);
      setShowVideoDevices(false);
    } catch (error) {
      console.error("Error updating media stream:", error);
      toast.error("Failed to update media devices");
    }
  };

  const toggleAudio = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsMuted((prev) => !prev);
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsVideoOn((prev) => !prev);
    }
  };

  const shareScreen = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      const screenTrack = screenStream.getVideoTracks()[0];

      // Replace video track in all peer connections
      Object.values(peerConnectionsRef.current).forEach((pc) => {
        const sender = pc.getSenders().find((s) => s.track?.kind === "video");
        if (sender) {
          sender.replaceTrack(screenTrack);
        }
      });

      screenTrack.onended = () => {
        // Revert to camera when screen sharing ends
        if (localStream) {
          const videoTrack = localStream.getVideoTracks()[0];
          if (videoTrack) {
            Object.values(peerConnectionsRef.current).forEach((pc) => {
              const sender = pc.getSenders().find((s) => s.track?.kind === "video");
              if (sender) {
                sender.replaceTrack(videoTrack);
              }
            });
            videoTrack.enabled = true;
          }
        }
        setIsScreenSharing(false);
      };

      setIsScreenSharing(true);
    } catch (error) {
      console.error("Error sharing screen:", error);
      toast.error("Failed to share screen");
    }
  };

  const sendMessage = (message: string) => {
    if (!message.trim()) return;

    Object.values(dataChannelsRef.current).forEach((dataChannel) => {
      if (dataChannel.readyState === "open") {
        dataChannel.send(JSON.stringify({ type: "chat", user_id: user.user_id, message }));
      }
    });

    setMessages((prevMessages) => [...prevMessages, { user_id: user.user_id, message }]);
    setChatMessage("");
  };

  const sendReaction = (reaction: string) => {
    if (socketRef.current) {
      socketRef.current.emit("sendReaction", reaction);
    }

    const newReactions: Reaction[] = [];
    for (let i = 0; i < 5; i++) {
      newReactions.push({
        user_id: user.user_id,
        reaction: reaction,
        left: getRandomPosition(),
      });
    }
    setReactions((prevReactions) => [...prevReactions, ...newReactions]);
  };

  const toggleReactions = () => {
    setShowReactions((prev) => !prev);
    if (!showReactions) {
      setTimeout(() => {
        setShowReactions(false);
      }, 3000);
    }
  };

  const handleAdminAction = (data: any) => {
    const { action } = data;
    if (action === "mute" && localStream) {
      localStream.getAudioTracks().forEach((track) => (track.enabled = false));
      setIsMuted(true);
    } else if (action === "disableCamera" && localStream) {
      localStream.getVideoTracks().forEach((track) => (track.enabled = false));
      setIsVideoOn(false);
    } else if (action === "kick") {
      hangUp();
      toast.error("You have been kicked from the room");
    }
  };

  const performAdminAction = (action: string, userId: string) => {
    // Get socket id by user id
    const targetSocketId = connectedUsers.find((user) => user.user_id === userId)?.socket_id;

    if (isAdmin && targetSocketId && socketRef.current) {
      socketRef.current.emit("adminAction", { action, target_socket_id: targetSocketId });
    } else {
      toast.error("You are not authorized to perform this action");
    }
  };

  const hangUp = () => {
    // Close all peer connections
    Object.values(peerConnectionsRef.current).forEach((pc) => {
      pc.close();
    });
    setPeerConnections({});
    peerConnectionsRef.current = {};

    // Stop local stream
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
      setLocalStream(null);
    }

    // Leave the room
    if (socketRef.current) {
      socketRef.current.emit("leaveRoom", { room_name: name, user_id: user.user_id });
    }

    setIsInCall(false);
    setRemoteStreams([]);
    setConnectedUsers([]);
    setIsAdmin(false);
    setIsInitiator(false);

    // Redirect functionality would be handled by your router
    // For example: history.push('/') or navigate('/')
  };

  const updateVideoSizes = () => {
    setVideoSizes(calculateVideoSizes());
  };

  const calculateVideoSizes = () => {
    const numStreams = remoteStreams.length;
    const width = Math.ceil(Math.sqrt(numStreams));
    const height = Math.ceil(numStreams / width);
    return { width, height };
  };

  const getGridStyles = () => {
    const { width, height } = calculateVideoSizes();
    return {
      display: "grid",
      gridTemplateColumns: `repeat(${width}, 1fr)`,
      gridTemplateRows: `repeat(${height}, 1fr)`,
      height: "calc(100vh - 100px)",
    };
  };

  const getVideoStyles = () => {
    const { height, width } = calculateVideoSizes();
    return {
      height: `calc((100vh - 100px) / ${height})`,
      minWidth: "300px",
      minHeight: "200px",
    };
  };

  const getRandomPosition = () => {
    return Math.random() * 100;
  };

  const randomSeconds = () => {
    const min = 1;
    const max = 3;
    const random = Math.random() * (max - min) + min;
    return `${random}s`;
  };

  const copyContent = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => toast.success("Link copied to clipboard"))
      .catch((err) => toast.error("Failed to copy link"));
  };

  return (
    <div className="bg-indigo-50 dark:bg-slate-800 text-slate-950 dark:text-slate-50 relative w-full overflow-hidden flex">
      {connectedUsers.length < 2 && (
        <div className="fixed top-20 left-10 rounded-md shadow-xl p-2 bg-indigo-300 dark:bg-indigo-950 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full w-full" role="button">
            <p className="text-5xl">You're in the room alone</p>
            <p className="text-3xl">
              Share this link to invite others while we get you random peers
            </p>
            <p
              className="text-xl cursor-pointer"
              onClick={() => copyContent(`${baseUrl}/lobby/${name}`)}
            >
              {baseUrl}/lobby/{name}
            </p>
          </div>
        </div>
      )}

      {/* Main call screen */}
      <div
        className={`${showSideChat ? "w-3/4" : "flex-grow"} flex flex-col items-start justify-start h-screen`}
      >
        <div
          style={getGridStyles()}
          className="relative flex flex-col items-center justify-center lg:grid w-full overflow-y-auto"
        >
          {remoteStreams.map((remote) => (
            <div
              key={remote.id}
              style={getVideoStyles()}
              className="self-stretch bg-slate-950 flex items-center justify-center"
            >
              <video
                id={`remote_video_${remote.id}`}
                ref={(el) => {
                  if (el) el.srcObject = remote.stream;
                }}
                autoPlay
                playsInline
                className="transform -scale-x-100 bg-slate-900 w-auto max-w-full self-stretch h-auto max-h-full rounded-md border-none"
              />
            </div>
          ))}

          <div className="absolute bottom-5 right-5 w-auto max-w-xs h-auto max-h-xs rounded-lg bg-slate-950 flex items-center justify-center">
            <video
              ref={localVideoRef}
              id="local_video"
              autoPlay
              muted
              playsInline
              className="transform -scale-x-100 rounded-md border-none bg-black w-full h-full max-w-full max-h-full"
            />
          </div>
        </div>

        <div className="h-24 w-full flex items-center justify-center gap-3">
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            {reactions.map((reaction, index) => (
              <div
                key={index}
                className="text-white text-6xl absolute"
                style={{
                  left: `${reaction.left}%`,
                  animation: `float-up ${randomSeconds()} ease-out forwards`,
                }}
              >
                {reaction.reaction}
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center text-3xl">
            {showReactions && (
              <div className="absolute w-auto whitespace-nowrap px-2 table bottom-28 left-1/2 transform -translate-x-1/2 shadow-xl rounded-xl bg-indigo-100 dark:bg-indigo-950">
                {["😂", "😍", "👏", "👍", "🔥", "🎉", "👋", "🙌", "🤩", "🤔", "🤗", "🤭"].map(
                  (emoji) => (
                    <span
                      key={emoji}
                      className="inline cursor-pointer p-1"
                      onClick={() => sendReaction(emoji)}
                    >
                      {emoji}
                    </span>
                  )
                )}
              </div>
            )}
            <button onClick={toggleReactions}>😂</button>
          </div>

          <div className="bg-slate-600 p-1 rounded-xl relative flex items-center justify-center">
            {showAudioDevices && (
              <div className="overflow-hidden absolute w-auto whitespace-nowrap flex flex-col items-start justify-start bottom-28 left-1/2 transform -translate-x-1/2 shadow-xl rounded-xl bg-indigo-100 dark:bg-indigo-950">
                {audioDevices.map((device) => (
                  <span
                    key={device.deviceId}
                    className="w-full p-2 hover:bg-indigo-300 cursor-pointer"
                    onClick={() => {
                      setSelectedAudioDeviceId(device.deviceId);
                      updateMediaStream();
                    }}
                  >
                    {device.label}
                  </span>
                ))}
              </div>
            )}
            <span
              onClick={() => setShowAudioDevices(!showAudioDevices)}
              className="cursor-pointer material-symbols-outlined text-dark dark:text-secondary"
            >
              {showAudioDevices ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
            <button onClick={toggleAudio}>{isMuted ? "🔇" : "🔊"}</button>
          </div>

          <div className="bg-slate-600 p-1 rounded-xl relative flex items-center justify-center">
            {showVideoDevices && (
              <div className="overflow-hidden absolute w-auto whitespace-nowrap flex flex-col items-start justify-start bottom-28 left-1/2 transform -translate-x-1/2 shadow-xl rounded-xl bg-indigo-100 dark:bg-indigo-950">
                {videoDevices.map((device) => (
                  <span
                    key={device.deviceId}
                    className="w-full p-2 hover:bg-indigo-300 cursor-pointer"
                    onClick={() => {
                      setSelectedVideoDeviceId(device.deviceId);
                      updateMediaStream();
                    }}
                  >
                    {device.label}
                  </span>
                ))}
              </div>
            )}
            <span
              onClick={() => setShowVideoDevices(!showVideoDevices)}
              className="cursor-pointer material-symbols-outlined text-dark dark:text-secondary"
            >
              {showVideoDevices ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            </span>
            <button onClick={toggleVideo}>{isVideoOn ? "📹" : "🚫"}</button>
          </div>

          {/* Show sidechat */}
          <div className="bg-slate-600 p-1 rounded-xl relative flex items-center justify-center">
            <span
              onClick={() => setShowSideChat(!showSideChat)}
              className="cursor-pointer material-symbols-outlined text-dark dark:text-secondary"
            >
              {showSideChat ? "keyboard_arrow_left" : "keyboard_arrow_right"}
            </span>
          </div>

          {/* End call button */}
          <div className="bg-slate-600 p-1 rounded-xl relative flex items-center justify-center">
            <span
              onClick={hangUp}
              className="cursor-pointer material-symbols-outlined text-dark dark:text-secondary"
            >
              call_end
            </span>
          </div>
        </div>
      </div>

      {/* Sidechat */}
      <div
        className={`${showSideChat ? "w-1/4" : "hidden"} flex flex-col items-center justify-start h-screen`}
      >
        <div className="w-full h-full flex flex-col items-center justify-start">
          <div className="w-full h-16 flex items-center justify-between p-2 bg-slate-600 text-slate-50">
            <h1 className="text-2xl">Sidechat</h1>
            <span
              className="material-symbols-outlined text-dark dark:text-secondary cursor-pointer"
              onClick={() => setShowSideChat(false)}
            >
              close
            </span>
          </div>

          <div className="w-full h-full flex flex-col items-start justify-start p-2 overflow-y-auto">
            <div className="w-full h-3/4 flex flex-col items-start justify-start p-2 bg-slate-950 rounded-md">
              {messages.map(
                (message, index) => (
                  <div key={index} className="w-full flex items-start justify-start gap-2">
                    <span className="text-xs text-indigo-400">{message.user_id}</span>
                    <span className="text-sm">{message.message}</span>
                  </div>
                ),
                []
              )}
            </div>

            <div className="w-full h-1/4 flex items-center justify-center gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full p-2 bg-slate-950 rounded-md"
              />
              <button onClick={() => sendMessage(chatMessage)}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caller;
