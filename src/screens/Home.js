import { ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignup } from "../../features/auth/authActions";
import { SignupForm } from "../components/SignupForm";
import { useEffect } from "react";
import { LoginForm } from "../components/LoginForm";
import { getData } from "../../lib/asyncStorage";
import { AuthGaurd, IfNoAuth } from "../../lib/AppGaurds";
import Auth from "../components/Auth";
export const Home = ({ navigation, route }) => {
 

  return (
    <ScrollView>
      <View className="w-4/5 mx-auto mt-10">
        
      </View>
    </ScrollView>
  );
};
