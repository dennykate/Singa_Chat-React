/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType, MessageType } from "@/types/type";
import { createSlice } from "@reduxjs/toolkit";

interface ChatState {
  chatUser?: UserType;
  messages: MessageType[];
  isTyping: boolean;
}

const initialState: ChatState = {
  chatUser: undefined,
  messages: [],
  isTyping: false,
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
    deleteMessage: (state, { payload }) => {
      state.messages = state.messages?.filter((message: MessageType) => {
        return message._id !== payload;
      });
    },
    updateMessage: (state, { payload }) => {
      state.messages = state.messages?.map((message: MessageType) => {
        if (message._id === payload?._id) {
          message.content = payload.content;
        }

        return message;
      });
    },
    readAllMessages: (state) => {
      state.messages = state.messages?.map((message: MessageType) => {
        if (message.isRead === false) message.isRead = true;

        return message;
      });
    },
    setIsTyping: (state, { payload }) => {
      state.isTyping = payload;
    },
    addReaction: (state, { payload }) => {
      state.messages = state.messages?.map((message: MessageType) => {
        if (message?._id === payload?.messageId) {
          message.reactions = [
            {
              user: payload.reactionUserId,
              type: payload.reactionType,
            },
            ...message.reactions,
          ];
          message.totalReactions += 1;
        }

        return message;
      });
    },
  },
});

export const {
  setChatUser,
  setMessages,
  addNewMessage,
  deleteMessage,
  updateMessage,
  readAllMessages,
  setIsTyping,
  addReaction,
} = chatSlice.actions;

export default chatSlice.reducer;
