import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignup } from "../../features/auth/authActions";
import { SignupForm } from "../components/SignupForm";
import { useEffect } from "react";
export const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { userInfo, token } = useSelector((s) => s.auth);
  useEffect(() => {
    console.log(userInfo, token);
  }, [userInfo, token]);
  const handleSubmit = async (data) => {
    dispatch(userLogin(data));
  };
  return (
    <View className="min-h-screen ">
      <View className="w-4/5 mx-auto mt-10">
        <SignupForm submit={handleSubmit} />
      </View>
    </View>
  );
};
