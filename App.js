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
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTitle: "TeachTech",
            headerRight: () => {
              return (
                <View>
                  <Text className="mr-4 rounded-full border flex justify-center items-center">
                    <MaterialCommunityIcons
                      name="account"
                      color={"black"}
                      size={26}
                    />
                  </Text>
                </View>
              );
            },
            headerLeft: () => {
              return (
                <View>
                  <Text className="mr-4 rounded-full border flex justify-center items-center">
                    <MaterialCommunityIcons
                      name="account"
                      color={"black"}
                      size={26}
                    />
                  </Text>
                </View>
              );
            },
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
              tabBarLabel: "Notifications",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: "Account",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
