import AuthContainer from "@/components/custom/container/AuthContainer";
import ChatRoom from "./components/ChatRoom";
import Sidebar from "./components/Sidebar";
import useGetNewUser from "./services/use-get-new-user";
import SmallScreenSidebar from "./components/SmallScreenSidebar";
import StartChat from "./components/StartChat";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
// import StartChat from "./components/StartChat";

const Chat = () => {
  const { chatUser } = useSelector((state: RootState) => state.chat);


  useGetNewUser();

  return (
    <AuthContainer>
      <div className="w-full h-screen overflow-hidden flex">
        {/* Above Medium Screen Sidebar  */}
        <div className="md:block hidden w-[300px]">
          <Sidebar  />
        </div>

        {/* Below Small Screen Sidebar  */}
        <SmallScreenSidebar
        />

        {chatUser ? (
          <ChatRoom  />
        ) : (
          <StartChat  />
        )}
      </div>
    </AuthContainer>
  );
};

export default Chat;
