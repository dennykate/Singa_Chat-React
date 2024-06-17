import { useEffect } from "react";
import FriendCard from "./FriendCard";

import getUsers from "../../services/user/get-users";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setUser } from "@/lib/redux/services/user-slice";
import { UserType } from "@/types/type";

const Friends = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();

      if (res?.success) {
        dispatch(setUser(res?.data));
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div className="w-full h-[calc(100%-160px)] flex flex-col gap-[2px] py-[2px] px-2">
      {users?.map((user: UserType) => (
        <FriendCard key={user?._id} user={user} />
      ))}
    </div>
  );
};

export default Friends;
