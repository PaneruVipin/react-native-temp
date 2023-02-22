import { AsyncStorage } from "react-native";
export const _storeData = async (key, value) => {
  const json = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, json);
  } catch (error) {
    console.log("error in data saving asyncStorage", error);
  }
};

export const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    return JSON.parse("");
  }
};
