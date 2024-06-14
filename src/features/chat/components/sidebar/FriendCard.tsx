const FriendCard = () => {
  return (
    <button
      className="w-full p-4 flex items-center gap-3
     hover:bg-primary-100/50 bg-gray-100"
    >
      <div className="min-w-[40px] h-[40px] rounded-full overflow-hidden border border-primary/50">
        <img
          src="/assets/images/logos/logo-square.webp"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-[2px] items-start w-[calc(100%-70px)]">
        <h6 className="text-sm">Denny Kate</h6>
        <p className="truncate text-xs text-gray-500 w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          voluptate harum vero exercitationem, dolor soluta perspiciatis
          placeat. Eligendi in amet accusantium obcaecati consequatur quisquam
          veritatis id, fa
        </p>
      </div>
    </button>
  );
};

export default FriendCard;
