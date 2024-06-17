import useProfile from "@/hooks/use-profile";
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
  const profile = useProfile();
  const [socket, setSocket] = useState<Socket | undefined>(undefined);

  useEffect(() => {
    const newSocket = io(config.baseWsURL);

    if (newSocket) {
      setSocket(newSocket);

      newSocket.emit("init-chat", profile?._id);
    }

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
