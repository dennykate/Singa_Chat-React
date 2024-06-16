/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GlobalActionState {
  sidebar: boolean;
}

// Define the initial state using that type
const initialState: GlobalActionState = {
  sidebar: false,
};

export const globalActionSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.sidebar = true;
    },
    hideSidebar: (state) => {
      state.sidebar = false;
    },
  },
});

export const { showSidebar, hideSidebar } = globalActionSlice.actions;

export default globalActionSlice.reducer;
