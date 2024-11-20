import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

const messages = [];

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer, {
    cors: {
      origin: "*", 
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.emit("allMessages", messages);

    socket.on("message", (message) => {
      console.log("New message:", message);

      
      const messageWithSender = {
        ...message,
        sender: 'other', // поменять на то что в Клиенте
      };

      messages.push(messageWithSender);

      io.emit("message", messageWithSender);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
