import ChatRoom from "./components/ChatRoom";
import Sidebar from "./components/Sidebar";

const Chat = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex">
      <Sidebar />
      <ChatRoom />
    </div>
  );
};

export default Chat;
