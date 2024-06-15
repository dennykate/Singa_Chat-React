import React from "react";
import { IoClose } from "react-icons/io5";

interface PropsType {
  onClose: () => void;
}

const SidebarHeader: React.FC<PropsType> = ({ onClose }) => {
  return (
    <div className="w-full h-[80px] flex items-center gap-2 border-b border-black border-opacity-10 relative">
      <div className="w-[70px] h-[70px]">
        <img
          src="/assets/images/logos/logo-square.webp"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col ">
        <h1 className="uppercase font-bold text-xl ">
          <span className="text-primary">Singa</span> Chat
        </h1>
        <p className="text-sm text-gray-700">Connect. Chat. Thrive</p>
      </div>

      {/* Close Button  */}
      <div className="absolute top-0 right-0 px-4 h-full sm:hidden flex items-center justify-center">
        <button onClick={onClose} className="relative">
          <IoClose size={22} />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};

export default SidebarHeader;
