import AuthContainer from "@/components/custom/container/AuthContainer";
import ChatRoom from "./components/ChatRoom";
import Sidebar from "./components/Sidebar";
import useGetNewUser from "./services/use-get-new-user";
import { useState } from "react";
import SmallScreenSidebar from "./components/SmallScreenSidebar";
// import StartChat from "./components/StartChat";

const Chat = () => {
  const [showFriends, setShowFriends] = useState<boolean>(false);

  useGetNewUser();

  return (
    <AuthContainer>
      <div className="w-full h-screen overflow-hidden flex">
        {/* Above Medium Screen Sidebar  */}
        <div className="md:block hidden w-[300px]">
          <Sidebar setShowFriends={setShowFriends} />
        </div>

        {/* Below Small Screen Sidebar  */}
        <SmallScreenSidebar
          showFriends={showFriends}
          setShowFriends={setShowFriends}
        />

        <ChatRoom setShowFriends={setShowFriends} />
        {/* <StartChat /> */}
      </div>
    </AuthContainer>
  );
};

export default Chat;
