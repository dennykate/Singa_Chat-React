// src/store.js
import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./services/user-slice";
import chatSlice from "./services/chat-slice";
import globalActionSlice from "./services/global-action-slice";

const store = configureStore({
  reducer: {
    users: userSlice,
    chat: chatSlice,
    globalAction: globalActionSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
