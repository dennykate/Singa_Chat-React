import { setChatUser } from "@/lib/redux/services/chat-slice";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useEncryptStorage } from "use-encrypt-storage";

interface PropsType {
  children: React.ReactNode;
}

const InitProcessProvider: React.FC<PropsType> = ({ children }) => {
  const dispatch = useDispatch();
  const { get } = useEncryptStorage();

  const setDefaultChatUser = useCallback(() => {
    const defaultChatUser = get("chatUser");

    if (defaultChatUser) {
      dispatch(setChatUser(JSON.parse(defaultChatUser)));
    }
  }, [dispatch, get]);

  useEffect(() => {
    // setDefaultChatUser();
  }, [setDefaultChatUser]);

  return <>{children}</>;
};

export default InitProcessProvider;
