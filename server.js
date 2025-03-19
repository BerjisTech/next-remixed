// server.js
const { createServer } = require("node:http");
const next = require("next");
const { Server } = require("socket.io");
const axios = require("axios");

/**
 * Replace the dev, hostname, port with your desired values
 */
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3003;

// Create next app + request handler
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

// Rooms stored by room_name => { users: [{ socket_id, user_id, is_admin }] }
const rooms = {};

// A map of socket_id => { id, viewers, user_id, socket_id, ... }
const broadcasters = new Map();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  // Finally, start HTTP server
  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
