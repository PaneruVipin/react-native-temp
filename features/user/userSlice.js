import { createSlice } from "@reduxjs/toolkit";
import { userFetch } from "./userActions";
const initialState = {
  loading: false,
  userInfo: null,
  error: "",
  success: false,
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
export default userSlice.reducer;
