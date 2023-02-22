import { useFocusEffect } from "@react-navigation/native";
import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../lib/asyncStorage";
import { userLogin, userSignup } from "./authActions";
let token;
getData("token").then((res) => (token = res));
const initialState = {
  loading: false,
  userInfo: null,
  token,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(userSignup.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userSignup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(userSignup.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export default authSlice.reducer;
