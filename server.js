import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

// Массив для хранения сообщений
const messages = [];

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer, {
    cors: {
      origin: "*", // Разрешите подключение откуда угодно, если нужно
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Отправляем все сохранённые сообщения новому клиенту
    socket.emit("allMessages", messages);

    // Обрабатываем входящие сообщения
    socket.on("message", (message) => {
      console.log("New message:", message);

      // Добавляем информацию о отправителе (если сообщение отправлено пользователем)
      const messageWithSender = {
        ...message,
        sender: 'other', // Добавьте сюда вашу логику для отправителя
      };

      // Сохраняем сообщение
      messages.push(messageWithSender);

      // Отправляем сообщение всем подключённым клиентам
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
