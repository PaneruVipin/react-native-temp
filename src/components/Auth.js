import { FC, memo, useState } from "react";
import { View, Button, Text } from "react-native";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

const Auth = ({ ...props }) => {
  const [currentTab, setCurrentTab] = useState("LoginForm");
  const initialCss = `bg-gray-300 text-black`;
  const handlePress = (e) => {
    const name = e.target._internalFiberInstanceHandleDEV.memoizedProps.name;
    setCurrentTab(name);
  };
  const components = { LoginForm, SignupForm };
  const styles = {
    LoginForm: initialCss,
    SignupForm: initialCss,
    [currentTab]: `bg-blue-500 text-white`,
  };
  const Comp = components[currentTab];
  return (
    <View>
      <View className=" flex flex-row mt-2">
        <View className={`w-1/2 py-2 ${styles["LoginForm"]}`}>
          <Text className="text-center " name="LoginForm" onPress={handlePress}>
            Login
          </Text>
        </View>
        <View className={`w-1/2 py-2 ${styles["SignupForm"]}`}>
          <Text className="text-center" name="SignupForm" onPress={handlePress}>
            Signup
          </Text>
        </View>
      </View>
      <Comp />
    </View>
  );
};

Auth.defaultProps = {};

export default memo(Auth);
