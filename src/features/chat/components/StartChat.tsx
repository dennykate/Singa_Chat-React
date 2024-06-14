const StartChat = () => {
  return (
    <div className="w-[calc(100%-300px)] bg-primary-100 flex justify-center items-center  flex-col gap-4">
      <div className="sm:w-[500px] w-[300px]">
        <img src="/assets/images/start-chat.svg" alt="start-chat" />
      </div>

      <div className="bg-primary-800 px-8 py-4">
        <p className="text-base text-white">
          Please select chat to start an conservation.
        </p>
      </div>
    </div>
  );
};

export default StartChat;
