import AuthContainer from "@/components/custom/container/AuthContainer";
import ChatRoom from "./components/ChatRoom";
import Sidebar from "./components/Sidebar";
import useGetNewUser from "./services/use-get-new-user";
// import StartChat from "./components/StartChat";

const Chat = () => {
  useGetNewUser();

  return (
    <AuthContainer>
      <div className="w-full h-screen overflow-hidden flex">
        <Sidebar />
        <ChatRoom />
        {/* <StartChat /> */}
      </div>
    </AuthContainer>
  );
};

export default Chat;
