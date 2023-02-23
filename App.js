import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/screens/Home";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Notification from "./src/screens/Notification";
import Account from "./src/screens/Account";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { Header, HeaderRightPart } from "./src/components/Header";
import Logo from "./src/components/attoms/Logo";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={(props) => {
            return {
              headerTitle: "TeachTech",
              headerRight: () => (
                <View className="mr-4">
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
    </Provider>
  );
}
