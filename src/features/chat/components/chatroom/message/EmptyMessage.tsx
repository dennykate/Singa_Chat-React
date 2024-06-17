const EmptyMessage = () => {
  return (
    <div className="w-full bg-primary-100 h-full flex justify-center items-center flex-col">
      <div className="sm:w-[500px] w-full">
        <img src="/assets/images/empty-message.svg" alt="empty-message" />
      </div>

      {/* <div className="bg-primary-800 px-8 py-4 translate-y-[-50px]">
        <p className="text-base text-white">
          There are no messages to show. <br />
          Start a conversation by sending a message from the text box below.
        </p>
      </div> */}
    </div>
  );
};

export default EmptyMessage;
