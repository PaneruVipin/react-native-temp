import { FC, memo, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/screens/Home";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Notification from "./src/screens/Notification";
import Account from "./src/screens/Account";
import { HeaderRightPart } from "./src/components/Header";
import Logo from "./src/components/attoms/Logo";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "./features/user/userActions";
const Tab = createBottomTabNavigator();

const Routes = ({ ...props }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((s) => s.auth);
  useEffect(() => {
    dispatch(userFetch());
  }, [token]);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(props) => {
          return {
            headerTitle: "TeachTech",
            headerRight: () => (
              <View style={{ paddingRight: 8 }}>
                <HeaderRightPart {...props} />
              </View>
            ),
            headerLeft: () => (
              <View style={{ paddingLeft: 6 }}>
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
