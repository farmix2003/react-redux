import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {},
    loginUserFail: (state) => {},
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
    registerUserFail: (state) => {
      state.isLoading = false;
      state.error = "error";
    },
  },
});
export const {
  loginUserStart,
  registerUserStart,
  registerUserFail,
  registerUserSuccess,
} = authSlice.actions;
export default authSlice.reducer;
