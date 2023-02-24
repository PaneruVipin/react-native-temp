import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../apis/user";

export const userFetch = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data: res } = await getUser();
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
