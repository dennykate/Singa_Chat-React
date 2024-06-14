import MessageCard from "./reactions/MessageCard";

const ChatMessages = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className="w-full h-full overflow-y-auto flex flex-col-reverse justify-start gap-4 px-2 
        scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent py-4"
      >
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </div>
  );
};

export default ChatMessages;