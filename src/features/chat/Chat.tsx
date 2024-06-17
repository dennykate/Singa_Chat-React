import ChatRoom from "./components/ChatRoom";
import Sidebar from "./components/Sidebar";
import useGetNewUser from "./services/user/use-get-new-user";
import SmallScreenSidebar from "./components/SmallScreenSidebar";
import StartChat from "./components/StartChat";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import useGetDeleteMessage from "./services/message/use-get-delete-message";
import useGetSendMessage from "./services/message/use-get-send-message";
// import StartChat from "./components/StartChat";

const Chat = () => {
  const { chatUser } = useSelector((state: RootState) => state.chat);

  // Getting new user
  useGetNewUser();

  // Getting deleted message
  useGetDeleteMessage();

  // Getting new message
  useGetSendMessage();

  return (
    <main className="w-full h-screen overflow-hidden flex">
      {/* Above Medium Screen Sidebar  */}
      <div className="md:block hidden w-[300px]">
        <Sidebar />
      </div>

      {/* Below Small Screen Sidebar  */}
      <SmallScreenSidebar />

      {chatUser ? <ChatRoom /> : <StartChat />}
    </main>
  );
};

export default Chat;
