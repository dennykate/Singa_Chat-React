/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType, MessageType } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";

interface ChatState {
  chatUser?: UserType;
  messages: MessageType[];
}

const initialState: ChatState = {
  chatUser: undefined,
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatUser: (state, { payload }) => {
      state.messages = [];
      state.chatUser = payload;
    },
    setMessages: (state, { payload }) => {
      state.messages = payload;
    },
    addNewMessage: (state, { payload }) => {
      state.messages = [payload, ...state.messages];
    },
    removeMessage: (state, { payload }) => {
      state.messages = state.messages?.filter((message: MessageType) => {
        return message._id !== payload;
      });
    },
  },
});

export const { setChatUser, setMessages, addNewMessage, removeMessage } =
  chatSlice.actions;

export default chatSlice.reducer;
