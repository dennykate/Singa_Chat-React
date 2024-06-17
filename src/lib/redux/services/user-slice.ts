/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  users: UserType[];
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.users = payload;
    },
    setNewUser: (state, { payload }) => {
      state.users = [payload, ...state.users];
    },
    updateLastMessage: (state, { payload }) => {
      state.users = state.users?.map((user) => {
        if (
          payload?.sender?._id == user?._id ||
          payload?.recipient?._id == user?._id ||
          payload?.sender == user?._id ||
          payload?.recipient == user?._id
        ) {
          console.log("update last message => ", payload);
          user.lastMessage = payload?.content;
        }

        return user;
      });
    },
    setUserSliceDefault: (state) => {
      state.users = [];
    },
  },
});

export const { setUser, setNewUser, updateLastMessage, setUserSliceDefault } =
  userSlice.actions;

export default userSlice.reducer;
