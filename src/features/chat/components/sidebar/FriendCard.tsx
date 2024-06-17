import Avatar from "@/components/custom/common/Avatar";
import { setChatUser } from "@/lib/redux/services/chat-slice";
import { hideSidebar } from "@/lib/redux/services/global-action-slice";
import { RootState } from "@/lib/redux/store";
import { UserType } from "@/types/type";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { useEncryptStorage } from "use-encrypt-storage";

interface PropsType {
  user: UserType;
}

const FriendCard: React.FC<PropsType> = ({ user }) => {
  const dispatch = useDispatch();
  const { set } = useEncryptStorage();
  const { chatUser } = useSelector((state: RootState) => state.chat);

  const onClickHandler = () => {
    set("chatUser", JSON.stringify(user));
    dispatch(setChatUser(user));
    dispatch(hideSidebar());
  };

  const isActiveUser = useMemo(
    () => chatUser?._id === user._id,
    [chatUser, user]
  );

  return (
    <button
      className={twMerge(
        "w-full px-4 h-[70px] flex items-center gap-3 transition-all duration-300 ease-in-out",
        isActiveUser
          ? "bg-primary-300 rounded-lg"
          : "hover:bg-primary-100/50 bg-gray-100"
      )}
      onClick={onClickHandler}
    >
      <Avatar
        src={user?.profile}
        alt={user?.username}
        className="min-w-[45px] h-[45px] border border-primary/50"
      />

      <div className="flex flex-col gap-[2px] items-start w-[calc(100%-70px)]">
        <h6 className={twMerge("text-sm text-start text-black")}>
          {user?.username}
        </h6>
        <p
          className={twMerge(
            "truncate text-xs w-full text-start text-gray-500 "
          )}
        >
          {user?.lastMessage !== ""
            ? user?.lastMessage
            : "This is new conversation"}
        </p>
      </div>
    </button>
  );
};

export default FriendCard;
