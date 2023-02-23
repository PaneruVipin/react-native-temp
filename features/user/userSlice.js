import { createSlice } from "@reduxjs/toolkit";
import { userFetch } from "./userActions";
const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userFetch.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userFetch.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    });
    builder.addCase(userFetch.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export default userSlice.reducer;
