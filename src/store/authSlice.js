import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginAuth: (state, action) => {
      console.log(action.payload);
      state.status = "true";
      state.userData = action.payload;
    },
    logoutAuth: (state) => {
      state.status = false;
      state.userData = null;
    },
    updateAuth: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { loginAuth, logoutAuth, updateAuth } = authSlice.actions;

export default authSlice.reducer;
