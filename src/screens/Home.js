import { View } from "react-native";
import { _retrieveData, _storeData } from "../../lib/asyncStorage";
import { SignupForm } from "../components/SignupForm";

export const Home = ({ navigation, route }) => {
  const handleSubmit = async (data) => {
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
