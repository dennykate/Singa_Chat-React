import ChatRoom from "./components/ChatRoom";
import Sidebar from "./components/Sidebar";
import useGetNewUser from "./services/use-get-new-user";
// import StartChat from "./components/StartChat";

const Chat = () => {
  useGetNewUser()

  return (
    <div className="w-full h-screen overflow-hidden flex">
      <Sidebar />
      <ChatRoom />
      {/* <StartChat /> */}
    </div>
  );
};

export default Chat;
