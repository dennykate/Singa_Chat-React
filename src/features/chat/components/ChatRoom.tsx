import ChatInput from "./chatroom/room/ChatInput";
import ChatMessages from "./chatroom/room/ChatMessages";
import ChatRoomHeader from "./chatroom/room/ChatRoomHeader";

interface PropsType {}

const ChatRoom: React.FC<PropsType> = () => {
  return (
    <div className="md:w-[calc(100%-300px)] w-full bg-primary-100">
      <ChatRoomHeader />

      <div className="max-w-[900px] mx-auto h-[calc(100%-80px)] lg:px-0 sm:px-4 px-2">
        <ChatMessages />

        <ChatInput />
      </div>
    </div>
  );
};

export default ChatRoom;
