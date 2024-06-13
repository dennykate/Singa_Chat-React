const SidebarHeader = () => {
  return (
    <div className="w-full h-[80px] flex items-center gap-2 border-b border-black border-opacity-10">
      <div className="w-[70px] h-[70px]">
        <img
          src="/assets/images/logos/logo-square.webp"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col ">
        <h1 className="uppercase font-bold text-xl">Singa Chat</h1>
        <p className="text-sm">Connect. Chat. Thrive</p>
      </div>
    </div>
  );
};

export default SidebarHeader;
