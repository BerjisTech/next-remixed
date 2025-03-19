"use client";

import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

/**
 * We define an interface to strongly type our RTC events
 * for 'offer', 'answer', 'ice-candidate', etc.
 */
interface OfferPayload {
  receiver_id: string;
  offer: RTCSessionDescriptionInit;
}

interface AnswerPayload {
  receiver_id: string;
  answer: RTCSessionDescriptionInit;
}

interface IceCandidatePayload {
  receiver_id: string;
  candidate: RTCIceCandidateInit;
}

interface AdminActionPayload {
  action: string;
  target_socket_id: string;
}

/**
 * Hook that replicates the Angular "SignalingService":
 * 1) Connects to "/signal" namespace
 * 2) Exposes methods (createRoom, joinRoom, sendOffer, etc.)
 * 3) Provides 'onXYZ' event subscriptions
 */
export function useSignaling() {
  // The socket reference
  const [socket, setSocket] = useState<Socket | null>(null);

  // We store some internal states if you want direct React states:
  const [roomCreated, setRoomCreated] = useState<string | null>(null);
  const [roomError, setRoomError] = useState<string | null>(null);
  const [existingUsers, setExistingUsers] = useState<any[]>([]);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [reactions, setReactions] = useState<any[]>([]);
  // You can store more states if desired

  /** On component mount, connect to /signal */
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

    // Basic connection logs
    newSocket.on("connect", () => {
      console.log("Connected to signaling server");
    });

    newSocket.on("disconnect", () => {
      console.warn("Disconnected from signaling server");
    });

    newSocket.on("connect_error", (error: Error) => {
      console.error("Connection error:", error);
    });

    newSocket.on("error", (error: Error) => {
      console.error("Socket error:", error);
    });

    return () => {
      console.log("Disconnecting from signaling server");
      newSocket.disconnect();
    };
  }, []);

  // -------------------------------------------------
  // 1) ROOM METHODS
  // -------------------------------------------------

  /** Create a new room on the signaling server */
  const createRoom = useCallback(
    (room_name: string, user_id: string) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return;
      }
      console.log(`Creating room: ${room_name} for user: ${user_id}`);
      socket.emit("createRoom", { room_name, user_id });
    },
    [socket]
  );

  /** Join an existing room on the signaling server */
  const joinRoom = useCallback(
    (room_name: string, user_id: string) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return;
      }
      console.log(`Joining room: ${room_name} for user: ${user_id}`);
      socket.emit("joinRoom", { room_name, user_id });
    },
    [socket]
  );

  /** Leave a room on the signaling server */
  const leaveRoom = useCallback(
    (room_name: string, user_id: string) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return;
      }
      console.log(`Leaving room: ${room_name} for user: ${user_id}`);
      socket.emit("leaveRoom", { room_name, user_id });
    },
    [socket]
  );

  // -------------------------------------------------
  // 2) WEBRTC SIGNALING (Offer, Answer, ICE)
  // -------------------------------------------------

  /** Send an offer to another user */
  const sendOffer = useCallback(
    (receiver_id: string, offer: RTCSessionDescriptionInit) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return;
      }
      console.log(`Sending offer to user: ${receiver_id}`);
      socket.emit("offer", { receiver_id, offer } as OfferPayload);
    },
    [socket]
  );

  /** Send an answer to another user */
  const sendAnswer = useCallback(
    (receiver_id: string, answer: RTCSessionDescriptionInit) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return;
      }
      console.log(`Sending answer to user: ${receiver_id}`);
      socket.emit("answer", { receiver_id, answer } as AnswerPayload);
    },
    [socket]
  );

  /** Send an ICE candidate to another user */
  const sendIceCandidate = useCallback(
    (receiver_id: string, candidate: RTCIceCandidateInit) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return;
      }
      console.log(`Sending ICE candidate to user: ${receiver_id}`);
      socket.emit("ice-candidate", { receiver_id, candidate } as IceCandidatePayload);
    },
    [socket]
  );

  // -------------------------------------------------
  // 3) CHAT & REACTIONS
  // -------------------------------------------------

  /** Send a chat message to the server (room-based) */
  const sendChatMessage = useCallback(
    (message: string) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return;
      }
      console.log(`Sending chat message: ${message}`);
      socket.emit("chatMessage", message);
    },
    [socket]
  );

  /** Send a reaction to the server */
  const sendReaction = useCallback(
    (reaction: string) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return;
      }
      console.log(`Sending reaction: ${reaction}`);
      socket.emit("sendReaction", reaction);
    },
    [socket]
  );

  // -------------------------------------------------
  // 4) ADMIN ACTIONS
  // -------------------------------------------------
  const sendAdminAction = useCallback(
    (action: string, target_socket_id: string) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return;
      }
      console.log(`Sending admin action: ${action} to user: ${target_socket_id}`);
      const payload: AdminActionPayload = { action, target_socket_id };
      socket.emit("adminAction", payload);
    },
    [socket]
  );

  // -------------------------------------------------
  // 5) EVENT SUBSCRIPTIONS
  //    We replicate the Angular "onXYZ()" methods
  //    Each method returns a function you can call
  //    to register a callback. It also returns an
  //    unsubscribe cleanup function.
  // -------------------------------------------------

  const onRoomCreated = useCallback(
    (callback: (room_name: string) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      const listener = (room_name: string) => {
        console.log("Room created =>", room_name);
        setRoomCreated(room_name);
        callback(room_name);
      };
      socket.on("roomCreated", listener);

      return () => {
        console.log("Unsubscribing from roomCreated event");
        socket.off("roomCreated", listener);
      };
    },
    [socket]
  );

  const onRoomJoinError = useCallback(
    (callback: (error: string) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      const listener = (error: string) => {
        console.error("Room join error =>", error);
        setRoomError(error);
        callback(error);
      };
      socket.on("roomJoinError", listener);

      return () => {
        console.log("Unsubscribing from roomJoinError event");
        socket.off("roomJoinError", listener);
      };
    },
    [socket]
  );

  const onRoomExists = useCallback(
    (callback: (msg: string) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      const listener = (error: string) => {
        console.error("Room exists =>", error);
        callback(error);
      };
      socket.on("roomExists", listener);

      return () => {
        console.log("Unsubscribing from roomExists event");
        socket.off("roomExists", listener);
      };
    },
    [socket]
  );

  const onOffer = useCallback(
    (callback: (data: any) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("offer", callback);
      return () => {
        console.log("Unsubscribing from offer event");
        socket.off("offer", callback);
      };
    },
    [socket]
  );

  const onAnswer = useCallback(
    (callback: (data: any) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("answer", callback);
      return () => {
        console.log("Unsubscribing from answer event");
        socket.off("answer", callback);
      };
    },
    [socket]
  );

  const onIceCandidate = useCallback(
    (callback: (data: any) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("ice-candidate", callback);
      return () => {
        console.log("Unsubscribing from ice-candidate event");
        socket.off("ice-candidate", callback);
      };
    },
    [socket]
  );

  const onUserJoined = useCallback(
    (callback: (data: any) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("userJoined", callback);
      return () => {
        console.log("Unsubscribing from userJoined event");
        socket.off("userJoined", callback);
      };
    },
    [socket]
  );

  const onExistingUsers = useCallback(
    (callback: (users: any[]) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("existingUsers", callback);
      return () => {
        console.log("Unsubscribing from existingUsers event");
        socket.off("existingUsers", callback);
      };
    },
    [socket]
  );

  const onUserLeft = useCallback(
    (callback: (data: any) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("userLeft", callback);
      return () => {
        console.log("Unsubscribing from userLeft event");
        socket.off("userLeft", callback);
      };
    },
    [socket]
  );

  const onChatMessage = useCallback(
    (callback: (data: any) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("chatMessage", (data) => {
        console.log("Received chat message =>", data);
        setChatMessages((prev) => [...prev, data]);
        callback(data);
      });
      return () => {
        console.log("Unsubscribing from chatMessage event");
        socket.off("chatMessage");
      };
    },
    [socket]
  );

  const onReceiveReaction = useCallback(
    (callback: (data: any) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("receiveReaction", (data) => {
        console.log("Received reaction =>", data);
        setReactions((prev) => [...prev, data]);
        callback(data);
      });
      return () => {
        console.log("Unsubscribing from receiveReaction event");
        socket.off("receiveReaction");
      };
    },
    [socket]
  );

  const onAdminAction = useCallback(
    (callback: (data: any) => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("adminAction", callback);
      return () => {
        console.log("Unsubscribing from adminAction event");
        socket.off("adminAction", callback);
      };
    },
    [socket]
  );

  const onKicked = useCallback(
    (callback: () => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("kicked", () => {
        console.warn("You have been kicked from the room");
        callback();
      });
      return () => {
        console.log("Unsubscribing from kicked event");
        socket.off("kicked");
      };
    },
    [socket]
  );

  const onAdminAssigned = useCallback(
    (callback: () => void) => {
      if (!socket) {
        console.warn("Socket is not initialized");
        return () => {};
      }
      socket.on("adminAssigned", () => {
        console.log("You have been assigned as admin");
        callback();
      });
      return () => {
        console.log("Unsubscribing from adminAssigned event");
        socket.off("adminAssigned");
      };
    },
    [socket]
  );

  // -------------------------------------------------
  // 6) RETURN everything from the Hook
  // -------------------------------------------------
  return {
    // The raw socket
    socket,

    // Emitting methods
    createRoom,
    joinRoom,
    leaveRoom,
    sendOffer,
    sendAnswer,
    sendIceCandidate,
    sendChatMessage,
    sendReaction,
    sendAdminAction,

    // Subscriptions
    onRoomCreated,
    onRoomJoinError,
    onRoomExists,
    onOffer,
    onAnswer,
    onIceCandidate,
    onUserJoined,
    onExistingUsers,
    onUserLeft,
    onChatMessage,
    onReceiveReaction,
    onAdminAction,
    onKicked,
    onAdminAssigned,

    // Some stored states (optional if you want them)
    roomCreated,
    roomError,
    existingUsers,
    chatMessages,
    reactions,
  };
}
