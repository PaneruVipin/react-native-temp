// import { FC, memo } from "react";
import { View } from "react-native";
import { SignupForm } from "../components/SignupForm";

export const Home = ({ navigation, route }) => {
  const handleSubmit = (data) => {
    navigation.navigate("Profile", { ...data });
  };
  return (
    <View>
      <SignupForm submit={handleSubmit} />
    </View>
  );
};
