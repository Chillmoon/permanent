import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./features/userSlice";

export type RootState = {
  user: {
    user: {
      email: string;
      password: string;
      username: string;
      uid?: string;
    } | null;
    isLoading: boolean;
    language: "ua" | "ru";
    isPayed: {
      eyeliner: {
        isPayed: false;
        orderId: string;
        merchantId: string;
        signature: string;
      };
    };
  };
};
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
