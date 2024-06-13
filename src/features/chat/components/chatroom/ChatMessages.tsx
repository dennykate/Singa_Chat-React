import Message from "./Message";

const ChatMessages = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className="w-full h-full overflow-y-auto flex flex-col-reverse justify-start gap-4 px-2 
        scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent py-4"
      >
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default ChatMessages;
