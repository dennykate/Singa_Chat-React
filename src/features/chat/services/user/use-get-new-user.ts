import useSocket from "@/hooks/use-socket";
import { setNewUser } from "@/lib/redux/services/user-slice";
import { UserType } from "@/types/type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useGetNewUser = () => {
  const dispatch = useDispatch();
  
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handleNewUser = (data: { user: UserType }) => {
      if (data?.user) {
        toast.success(`New user - ${data.user.username} is joined now !`);

        dispatch(setNewUser(data.user));
      }
    };

    socket.on("new-user", handleNewUser);

    return () => {
      socket.off("new-user", handleNewUser);
    };
  }, [socket]);
};

export default useGetNewUser;
