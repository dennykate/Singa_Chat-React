import { useGoogleLogin } from "@react-oauth/google";
import { useEncryptStorage } from "use-encrypt-storage";

import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import googleAuth from "../services/google-auth";
import useNewUser from "../services/use-new-user";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const GoogleButton = () => {
  const navigate = useNavigate();
  const newUser = useNewUser();
  const { set } = useEncryptStorage();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      const res = await googleAuth(tokenResponse.access_token);

      if (res) {
        set("accessToken", res?.data?.access_token);
        set("refreshToken", res?.data?.refresh_token);
        set("profile", JSON.stringify(res?.data?.user));

        if (res?.data?.is_new) {
          newUser(res?.data?.access_token);
        }

        toast.success("Login Success");

        navigate("/chat");
        // window.location.href = "/chat";
      }

      setIsLoading(false);
    },
  });

  return (
    <button
      disabled={isLoading}
      onClick={() => {
        login();
      }}
      className={twMerge(
        "lg:w-full xs:w-[300px] w-[260px] px-4 py-2.5 border border-black border-opacity-40 flex items-center justify-start sm:gap-4 gap-2 ",
        isLoading ? "opacity-70" : "hover:ring-black hover:ring-1 opacity-100"
      )}
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
