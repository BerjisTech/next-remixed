"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { toast } from "sonner";

const SocketComponent = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    const socket = io({ path: "/next/socket" });

    function onConnect() {
      toast.warning("SOCKETS CONNECTED");
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    if (socket.connected) {
      onConnect();
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("update-input", (msg) => {
      toast.info("Sockets are working.");
      toast.success("Sockets are working.");
      toast.error("Sockets are working.");
      toast.warning("Sockets are working.");
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.disconnect(); // Proper cleanup
    };
  }, []);

  const handleClick = () => {
    const socket = io({ path: "/next/socket" });
    socket.emit("input-change", "e.target.value");
  };

  return (
    <div>
      <p>Socket Status: {isConnected ? "Connected" : "Disconnected"}</p>
      <p>Transport: {transport}</p>
      <button onClick={handleClick}>Send Message</button>
    </div>
  );
};

export default SocketComponent;

// "use client";
//
// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import { toast } from "sonner";
//
// // export
//
// const [isConnected, setIsConnected] = useState(false);
// const [transport, setTransport] = useState("N/A");
// const socket = io({ path: "/next/socket" });
// useEffect(() => {
//     if (socket.connected) {
//         onConnect();
//     }
//
//     function onConnect() {
//         toast.warning('SOCKETS CONNECTED')
//         setIsConnected(true);
//         setTransport(socket.io.engine.transport.name);
//
//         socket.io.engine.on("upgrade", (transport) => {
//             setTransport(transport.name);
//         });
//     }
//
//     function onDisconnect() {
//         setIsConnected(false);
//         setTransport("N/A");
//     }
//
//     socket.on("connect", onConnect);
//     socket.on("disconnect", onDisconnect);
//
//     socket.on('update-input', msg => {
//         toast.info("Sockets are working.")
//         toast.success("Sockets are working.")
//         toast.error("Sockets are working.")
//         toast.warning("Sockets are working.")
//     })
//
//     return () => {
//         socket.off("connect", onConnect);
//         socket.off("disconnect", onDisconnect);
//     };
// }, []);
//
// const handleClick = async () => {
//     socket.emit('input-change', 'e.target.value')
// }
