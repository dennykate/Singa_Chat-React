import Reaction from "./Reaction";

const ReactionCount = () => {
  return (
    <div className="bg-primary-300 hover:bg-primary-400 py-1 px-2 rounded-full flex gap-3 items-center cursor-pointer">
      <div className="flex items-center">
        <Reaction type="heart" />
        <Reaction type="haha" />
        <Reaction type="wow" />
      </div>

      <p className="text-[13px]  text-primary-900 translate-y-[1px]">100</p>
    </div>
  );
};

export default ReactionCount;
