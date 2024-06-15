import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import config from "@/lib/config/config";

const useSocket = (): Socket | undefined => {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io(config.baseWsURL, {
      transports: ["websocket"],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    setSocket(newSocket);

    console.log("Attempting to connect to socket server at", config.baseWsURL);

    newSocket.on("connect", () => {
      setSocket(newSocket);
      console.log("Connected to socket server");
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Disconnected from socket server:", reason);
      // setSocket(newSocket);
    });

    return () => {
      console.log("Disconnecting from socket server");
      newSocket.disconnect();
      setSocket(newSocket);
    };
  }, []);

  return socket;
};

export default useSocket;
