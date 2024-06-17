import config from "@/lib/config/config";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from "react";
import io, { Socket } from "socket.io-client";

interface PropsType {
  children: ReactNode;
}

export const SocketContext = createContext<Socket | undefined>(undefined);

export const SocketProvider: FC<PropsType> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);

  useEffect(() => {
    const newSocket = io(config.baseWsURL);

    if (newSocket) {
      setSocket(newSocket);
    }

    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
