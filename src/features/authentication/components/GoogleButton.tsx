import { useGoogleLogin } from "@react-oauth/google";
import { useEncryptStorage } from "use-encrypt-storage";

import googleAuth from "../services/google-auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const GoogleButton = () => {
  const navigate = useNavigate();
  const { set } = useEncryptStorage();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await googleAuth(tokenResponse.access_token);

      if (res) {
        set("accessToken", res?.data?.access_token);
        set("refreshToken", res?.data?.refresh_token);

        toast.success("Login Success");

        navigate("/chat");
      }
    },
  });

  return (
    <button
      onClick={() => login()}
      className="lg:w-full xs:w-[300px] w-[260px] px-4 py-2.5 border border-black border-opacity-40 flex items-center
     justify-start sm:gap-4 gap-2 hover:ring-black hover:ring-1"
    >
      <img
        src="/assets/images/logos/google-logo.svg"
        alt="google logo"
        className="w-8 h-8"
      />

      <p className="sm:text-base text-sm font-[400]">Continue With Google</p>
    </button>
  );
};

export default GoogleButton;
