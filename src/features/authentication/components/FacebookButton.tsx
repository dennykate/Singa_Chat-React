import unsupportedAction from "@/utilities/unsupported-action";

const FacebookButton = () => {
  return (
    <button
      onClick={unsupportedAction}
      className="lg:w-full xs:w-[300px] w-[260px] px-4 py-2.5 border border-black border-opacity-40 flex items-center
     justify-start sm:gap-4 gap-2 hover:ring-black hover:ring-1"
    >
      <img
        src="/assets/images/logos/facebook-logo.svg"
        alt="google logo"
        className="w-8 h-8"
      />

      <p className="sm:text-base text-sm font-[400]">Continue With Facebook</p>
    </button>
  );
};

export default FacebookButton;
