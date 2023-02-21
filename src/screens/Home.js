import { View } from "react-native";
import { SignupForm } from "../components/SignupForm";

export const Home = ({ navigation, route }) => {
  const handleSubmit = (data) => {
    navigation.navigate("Profile", { ...data });
  };
  return (
    <View className="min-h-screen ">
      <View className="w-4/5 mx-auto mt-10">
        <SignupForm submit={handleSubmit} />
      </View>
    </View>
  );
};
