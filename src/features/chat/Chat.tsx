import ChatRoom from "./components/ChatRoom";
import Sidebar from "./components/Sidebar";
import useGetNewUser from "./services/user/use-get-new-user";
import SmallScreenSidebar from "./components/SmallScreenSidebar";
import StartChat from "./components/StartChat";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import useGetDeleteMessage from "./services/message/use-get-delete-message";
import useGetSendMessage from "./services/message/use-get-send-message";
import useGetUpdateMessage from "./services/message/use-get-update-message";
import useGetReadAllMessages from "./services/message/use-get-read-all-messages";
import useGetTyping from "./services/message/use-get-typing";
import useGetReaction from "./services/message/reaction/use-get-reaction";
import useGetRemoveReaction from "./services/message/reaction/use-get-remove-reaction";
import useInitChat from "./services/use-init-chat";

// import StartChat from "./components/StartChat";

const Chat = () => {
  const { chatUser } = useSelector((state: RootState) => state.chat);

  // Initialize the chat
  useInitChat();

  // Getting new user
  useGetNewUser();

  // Getting deleted message
  useGetDeleteMessage();

  // Getting new message
  useGetSendMessage();

  // Getting update message
  useGetUpdateMessage();

  // Getting read all messages
  useGetReadAllMessages();

  // Getting typing or not
  useGetTyping();

  // Getting message reaction
  useGetReaction();

  // Getting message removed reacion
  useGetRemoveReaction();

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
