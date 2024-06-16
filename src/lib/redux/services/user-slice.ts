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
      state.users = [payload,...state.users];
    },
  },
});

export const { setUser, setNewUser } = userSlice.actions;

export default userSlice.reducer;
