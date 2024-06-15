import ChatInput from "./chatroom/ChatInput";
import ChatMessages from "./chatroom/ChatMessages";
import ChatRoomHeader from "./chatroom/ChatRoomHeader";

const ChatRoom = () => {
  return (
    <div className="w-[calc(100%-300px)] bg-primary-100">
      <ChatRoomHeader />

      <div className="max-w-[900px] mx-auto h-[calc(100%-80px)]">
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatRoom;
