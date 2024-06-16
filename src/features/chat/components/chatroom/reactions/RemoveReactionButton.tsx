import Avatar from "@/components/custom/common/Avatar";
import Reaction from "./Reaction";
import useProfile from "@/hooks/use-profile";

const DetailsReactionButton = () => {
  const profile = useProfile();

  return (
    <button className="flex items-center px-4 py-2 h-[50px] hover:bg-gray-100 justify-between">
      <div className="flex items-center gap-3  w-[80%]">
        <Avatar
          src={profile?.profile as string}
          alt={profile?.username as string}
          className="min-w-[35px] h-[35px] "
        />

        <div className="flex flex-col justify-start w-[80%] ">
          <h6 className="text-sm whitespace-nowrap w-full truncate text-start">
            {profile?.username}
          </h6>
          <p className="text-xs font-[300] truncate w-full text-start">
            Tap to remove
          </p>
        </div>
      </div>

      <Reaction type="love" emojiClassName="w-[18px] h-[18px]" />
    </button>
  );
};

export default DetailsReactionButton;
