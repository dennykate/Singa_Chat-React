import Reaction from "./Reaction";

const DetailsReactionButton = () => {
  return (
    <button className="flex items-center px-4 h-[50px] hover:bg-gray-100">
      <Reaction type="heart" emojiClassName="w-[18px] h-[18px]" />
      <div className="h-full w-[130px] flex items-center justify-center">
        <p className="text-sm font-[300]">Tap to remove</p>
      </div>
    </button>
  );
};

export default DetailsReactionButton;
