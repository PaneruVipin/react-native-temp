import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "../../apis/auth";
import { storeData } from "../../lib/asyncStorage";

export const userSignup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const { data: res } = await signup(data);
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

export const userLogin = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const { data: res } = await login(data);
      await storeData("token", res?.token);
      console.log("login succes", res);
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
