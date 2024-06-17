import { Link } from "react-router-dom";
import AppleButton from "./AppleButton";
import FacebookButton from "./FacebookButton";
import GoogleButton from "./GoogleButton";

const AuthForm = () => {
  return (
    <div
      className="lg:w-[300px] sm:w-[500px] w-[90%] flex flex-col items-center gap-4 bg-white 
      sm:p-10 p-6 lg:p-0  rounded-lg shadow-lg sm:shadow-none"
    >
      <div className="w-[160px] h-[160px]">
        <img
          src="/assets/images/logos/logo-square.png"
          alt="logo-square"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-sm font-[400] text-center">
        Welcome to Singa Chat! <br /> Please sign in using one of the methods
        below to continue.
      </p>

      <div className="my-4 flex flex-col gap-4 w-full items-center">
        <GoogleButton />

        <FacebookButton />

        <AppleButton />
      </div>

      <div className="text-sm font-[400] text-center">
        <Link to={""} className="hover:underline">
          Terms and Conditions
        </Link>{" "}
        |{" "}
        <Link to={""} className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
