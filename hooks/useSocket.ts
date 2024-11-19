import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface UseSocketReturn {
  messages: string[];
  sendMessage: (msg: string) => void;
}

export function useSocket(): UseSocketReturn {
  const socket = useRef<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.current = io({
      path: "/api/socket",
    });

    socket.current.on("message", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  const sendMessage = (msg: string) => {
    socket.current?.emit("message", msg);
  };

  return { messages, sendMessage };
}
