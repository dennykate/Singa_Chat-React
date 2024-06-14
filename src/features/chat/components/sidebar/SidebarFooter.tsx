import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useEncryptStorage } from "use-encrypt-storage";

import Avatar from "@/components/custom/common/Avatar";

const SidebarFooter = () => {
  const navigate = useNavigate();
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
     hover:bg-primary-100/50"
    >
      <div className="flex items-center gap-2">
        <Avatar
          src="/assets/images/logos/logo-square.webp"
          alt="logo"
          className="w-[50px] h-[50px] "
        />

        <div className="flex flex-col items-start">
          <h6 className="text-base">Denny Kate</h6>
          <p className="text-xs">dennykate22@gmail.com</p>
        </div>
      </div>

      <div className="relative">
        <MdLogout size={20} />
        <span className=" sr-only">Logout Button</span>
      </div>
    </button>
  );
};

export default SidebarFooter;
