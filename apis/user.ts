import axios from "axios";
import { getData } from "../lib/asyncStorage";
const BASE_URL = "https://vipin-api-upown.onrender.com";
export const getUser = async () => {
  const apiUrl = BASE_URL + `users/me`;
  const token = await getData("token");
  const res = axios.get(apiUrl, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};
