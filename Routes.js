import { FC, memo } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/screens/Home";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Notification from "./src/screens/Notification";
import Account from "./src/screens/Account";
import { Header, HeaderRightPart } from "./src/components/Header";
import Logo from "./src/components/attoms/Logo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "./features/user/userActions";
const Tab = createBottomTabNavigator();

const Routes = ({ ...props }) => {
  const dispatch = useDispatch();
  const { role } = useSelector((s) => s.user);
  const dispatchUser = async () => {
    dispatch(userFetch());
  };
  useEffect(() => {
    dispatchUser().then(() => {
      console.log(role);
    });
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(props) => {
          return {
            headerTitle: "TeachTech",
            headerRight: () => (
              <View className="pr-4">
                <HeaderRightPart {...props} />
              </View>
            ),
            headerLeft: () => (
              <View className="ml-3">
                <Logo />
              </View>
            ),
          };
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          options={{
            tabBarButton: () => null,
          }}
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

Routes.defaultProps = {};

export default memo(Routes);
