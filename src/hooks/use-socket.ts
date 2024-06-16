import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import config from "@/lib/config/config";
import useProfile from "./use-profile";

const useSocket = (): Socket | undefined => {
  const socketRef = useRef<Socket>();
  const profile = useProfile();

  useEffect(() => {
    const newSocket = io(config.baseWsURL, {
      transports: ["websocket"],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    console.log("Attempting to connect to socket server at", config.baseWsURL);

    newSocket.on("connect", () => {
      console.log("Connected to socket server");
      socketRef.current = newSocket;

      socketRef.current.emit("init-chat", profile?._id);
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Disconnected from socket server:", reason);
    });

    return () => {
      console.log("Disconnecting from socket server");
      newSocket.disconnect();
    };
  }, []);

  return socketRef.current;
};

export default useSocket;
