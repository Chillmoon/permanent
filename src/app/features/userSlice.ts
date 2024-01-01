import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
  language: "ua",
  isPayed: {
    fastEyeliner: {
      isPayed: false,
      orderId: "",
      merchantId: "1534312",
      signature: "",
    },
    hairCourse: {
      isPayed: false,
      orderId: "",
      merchantId: "1534312",
      signature: "",
    },
    hairCourseDemo: {
      isPayed: false,
      orderId: "",
      merchantId: "1534312",
      signature: "",
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = true;
    },
    logOutUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setIsPayed: (state, action) => {
      state.isPayed = action.payload;
    },
  },
});

export const { loginUser, logOutUser, setLoading } = userSlice.actions;
