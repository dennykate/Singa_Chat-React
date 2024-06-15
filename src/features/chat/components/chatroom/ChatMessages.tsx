import MessageCard from "./MessageCard";

const ChatMessages = () => {
  return (
    <div className="w-full sm:h-[calc(100%-80px)] h-[calc(100%-70px)] overflow-hidden">
      <div
        className="w-full h-full overflow-y-auto flex flex-col-reverse justify-start gap-4 sm:px-2 
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
