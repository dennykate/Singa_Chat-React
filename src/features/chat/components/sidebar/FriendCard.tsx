import Avatar from "@/components/custom/common/Avatar";
import { UserType } from "@/types/type";

interface PropsType {
  user: UserType;
}

const FriendCard: React.FC<PropsType> = ({ user }) => {
  return (
    <button
      className="w-full px-4 h-[70px] flex items-center gap-3
     hover:bg-primary-100/50 bg-gray-100"
    >
      <Avatar
        src={user?.profile}
        alt={user?.username}
        className="min-w-[40px] h-[40px] border border-primary/50"
      />

      <div className="flex flex-col gap-[2px] items-start w-[calc(100%-70px)]">
        <h6 className="text-sm">{user?.username}</h6>
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
