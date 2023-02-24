import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignup } from "../../features/auth/authActions";
import { SignupForm } from "../components/SignupForm";
import { useEffect } from "react";
import { LoginForm } from "../components/LoginForm";
import { getData } from "../../lib/asyncStorage";
export const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { userInfo, token, loading, error, success } = useSelector(
    (s) => s.auth
  );
  useEffect(() => {
    // console.log(userInfo, token, loading, error, success);
  }, [userInfo, token, loading, error, success]);
  const handleSignup = (data) => {
    dispatch(userSignup(data));
  };
  const handleLogin = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <ScrollView>
      <View className="w-4/5 mx-auto mt-10">
        <SignupForm submit={handleSignup} />
        <LoginForm submit={handleLogin} />
      </View>
    </ScrollView>
  );
};
