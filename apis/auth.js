import axios from "axios";

const BASE_URL = "https://vipin-api-upown.onrender.com";

export const signup = async (data) => {
  const apiUrl = BASE_URL + `/signup`;
  const res = await axios.post(apiUrl, data);
  return res;
};
export const login = async (data) => {
  const apiUrl = BASE_URL + `/login`;
  const res = await axios.post(apiUrl, data);
  return res;
};
