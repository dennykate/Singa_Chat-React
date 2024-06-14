import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useEncryptStorage } from "use-encrypt-storage";

import Avatar from "@/components/custom/common/Avatar";
import useProfile from "@/hooks/use-profile";

const SidebarFooter = () => {
  const navigate = useNavigate();
  const profile = useProfile();
  const { remove } = useEncryptStorage();

  const onLogoutHandler = () => {
    remove("accessToken");
    toast.success("Logout success");

    navigate("/login");
  };

  return (
    <button
      onClick={onLogoutHandler}
      className="w-full h-[80px] border-t border-black border-opacity-10 flex items-center justify-between px-4
     hover:bg-primary-100/50 overflow-hidden"
    >
      <div className="flex items-center gap-3  w-[80%]">
        <Avatar
          src={profile?.profile as string}
          alt={profile?.username as string}
          className="min-w-[45px] h-[45px] "
        />

        <div className="flex flex-col justify-start w-[80%] ">
          <h6 className="text-base whitespace-nowrap w-full truncate text-start">
            {profile?.username}
          </h6>
          <p className="text-xs font-[300] truncate w-full text-start">
            {profile?.email}
          </p>
        </div>
      </div>

      <MdLogout size={20} />
    </button>
  );
};

export default SidebarFooter;
