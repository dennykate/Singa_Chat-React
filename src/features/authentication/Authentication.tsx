import AuthForm from "./components/AuthForm";

const Authentication = () => {
  return (
    <div className="min-h-screen bg-white flex items-center w-full relative">
      <div className="lg:w-[calc(100%-500px)] w-full relative">
        <img
          src="/assets/images/chat-bg.jpg"
          alt="chat-bg"
          className="w-full min-h-screen object-cover"
        />

        <div
          className="absolute top-8 left-8 w-[80px] h-[80px] rounded-full shadow-md 
        overflow-hidden lg:block hidden"
        >
          <img
            src="/assets/images/logos/logo-square.webp"
            alt="logo-square"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className="flex justify-center items-center lg:w-[500px] w-full h-full lg:static absolute top-0 left-0
       lg:bg-white bg-black bg-opacity-30"
      >
        <AuthForm />
      </div>
    </div>
  );
};

export default Authentication;
