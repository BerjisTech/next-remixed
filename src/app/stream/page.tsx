"use client";

import React, { useRef, useState } from "react";
import { useStreaming } from "@/hooks/useStreaming"; // Adjust path as needed

export default function StreamingPage() {
  const {
    broadcasters,
    chatMessages,
    reactions,
    localStream,

    createRoom,
    joinRoom,
    leaveRoom,

    startBroadcast,
    joinBroadcast,
    leaveBroadcast,
    cleanupAllStreams,
    sendChatMessage,
    sendReaction,
  } = useStreaming();

  // For local (my) video if I'm broadcasting
  const localVideoRef = useRef<HTMLVideoElement>(null);

  // For remote (some broadcaster) video
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  // A random user ID or name
  const [userId] = useState(() => "User_" + Math.floor(Math.random() * 1000));

  // Are we currently broadcasting or viewing?
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  // Current broadcaster ID (when we join)
  const [currentBroadcasterId, setCurrentBroadcasterId] = useState<string>("");

  // Chat message input
  const [chatInput, setChatInput] = useState("");

  // Optional: Provide a “room name” for demonstration
  const [roomName, setRoomName] = useState("TestRoom");

  // -----------
  // Example: create or join a “room” (like your Angular code)
  // -----------
  function handleCreateRoom() {
    createRoom(roomName, userId);
  }

  function handleJoinRoom() {
    joinRoom(roomName, userId);
  }

  function handleLeaveRoom() {
    leaveRoom(roomName, userId);
  }

  // -----------
  // Start Broadcasting
  // -----------
  async function handleStartBroadcast() {
    if (!localVideoRef.current) return;
    try {
      await startBroadcast(localVideoRef.current, userId);
      setIsBroadcasting(true);
    } catch (err) {
      console.error("Error starting broadcast:", err);
    }
  }

  // -----------
  // Stop Broadcasting
  // -----------
  function handleStopBroadcast() {
    cleanupAllStreams();
    setIsBroadcasting(false);
  }

  // -----------
  // Join a Broadcaster => we become a viewer
  // -----------
  async function handleJoinBroadcast(broadcasterId: string) {
    if (!remoteVideoRef.current) return;
    try {
      await joinBroadcast(broadcasterId, remoteVideoRef.current, userId);
      setIsViewing(true);
      setCurrentBroadcasterId(broadcasterId);
    } catch (err) {
      console.error("Error joining broadcast:", err);
    }
  }

  // -----------
  // Leave current broadcast
  // -----------
  function handleLeaveBroadcast() {
    if (currentBroadcasterId) {
      leaveBroadcast(currentBroadcasterId);
    }
    setIsViewing(false);
    setCurrentBroadcasterId("");
  }

  // -----------
  // Send a chat message
  // -----------
  function handleSendChat() {
    if (!currentBroadcasterId) return;
    if (!chatInput.trim()) return;
    sendChatMessage(chatInput, currentBroadcasterId, userId);
    setChatInput("");
  }

  // -----------
  // Render
  // -----------
  return (
    <div className="p-4 text-gray-900 dark:text-slate-200">
      <h1 className="text-xl mb-4">Streaming Page (Next.js)</h1>

      {/* Room controls (optional) */}
      <div className="flex gap-2 mb-4">
        <input
          className="border p-2"
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Room name"
        />
        <button onClick={handleCreateRoom} className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Room
        </button>
        <button onClick={handleJoinRoom} className="bg-green-500 text-white px-4 py-2 rounded">
          Join Room
        </button>
        <button onClick={handleLeaveRoom} className="bg-red-500 text-white px-4 py-2 rounded">
          Leave Room
        </button>
      </div>

      {/* Broadcasting controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={handleStartBroadcast}
          disabled={isBroadcasting}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          {isBroadcasting ? "Broadcasting..." : "Go Live"}
        </button>
        <button
          onClick={handleStopBroadcast}
          disabled={!isBroadcasting}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Stop Broadcast
        </button>
      </div>

      {/* Local video (my broadcast) */}
      {isBroadcasting && (
        <div className="mb-4">
          <h2 className="font-semibold">My Broadcast</h2>
          <video
            ref={localVideoRef}
            className="w-[300px] h-[200px] bg-black"
            autoPlay
            muted
            playsInline
          />
        </div>
      )}

      {/* Broadcaster list */}
      <div className="mb-4">
        <h2 className="font-semibold">Active Broadcasters</h2>
        {broadcasters.length === 0 && <p>No active broadcasters</p>}
        <div className="flex flex-wrap gap-3 mt-2">
          {broadcasters.map((b) => (
            <div key={b.id} className="border border-gray-400 rounded p-2 w-[180px] text-center">
              <p className="font-bold">
                {b.name || b.user_id} ({b.viewerCount ?? 0} watchers)
              </p>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
                onClick={() => handleJoinBroadcast(b.id)}
                disabled={isBroadcasting || currentBroadcasterId === b.id}
              >
                Watch
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Remote video (someone else’s broadcast) */}
      {isViewing && (
        <div className="mb-4">
          <h2 className="font-semibold">Viewing Broadcast</h2>
          <video
            ref={remoteVideoRef}
            className="w-[400px] h-[300px] bg-black"
            autoPlay
            playsInline
            controls
          />
          <button
            onClick={handleLeaveBroadcast}
            className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
          >
            Leave Broadcast
          </button>
        </div>
      )}

      {/* Reactions */}
      <div className="mb-4 flex gap-2">
        {["😂", "😍", "👏", "👍", "🔥", "🎉"].map((emoji) => (
          <button
            key={emoji}
            onClick={() => sendReaction(emoji)}
            className="text-2xl"
            disabled={!isBroadcasting && !isViewing}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Chat */}
      <div className="mb-4 w-[300px]">
        <h2 className="font-semibold">Chat</h2>
        <div className="border h-[150px] overflow-y-auto p-2 mb-2">
          {chatMessages.map((msg, idx) => (
            <p key={idx}>
              <b>{msg.name}:</b> {msg.message}
            </p>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="border p-2 flex-grow"
            type="text"
            placeholder="Type message"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
          />
          <button onClick={handleSendChat} className="bg-indigo-500 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </div>

      {/* Reactions display */}
      <div className="mb-4">
        <h2 className="font-semibold">Reactions</h2>
        <div className="min-h-[50px] border p-2 flex flex-wrap gap-2">
          {reactions.map((r, idx) => (
            <div key={idx} className="bg-indigo-200 text-indigo-900 px-2 py-1 rounded">
              {r.user_id}: {r.reaction}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
