import { createSlice } from "@reduxjs/toolkit";
import { removeData } from "../../lib/asyncStorage";
import { userFetch } from "./userActions";
const initialState = {
  loading: false,
  userInfo: null,
  error: "",
  success: false,
  role: "",
};
const logoutAction = (state) => {
  removeData("token");
  state.loading = false;
  state.userInfo = null;
  state.error = "";
  state.success = false;
  state.role = "";
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: logoutAction,
  },
  extraReducers: (builder) => {
    builder.addCase(userFetch.pending, (state, { payload }) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(userFetch.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.success = true;
      state.role = payload.role;
    });
    builder.addCase(userFetch.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.role = "";
      state.success = false;
    });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
