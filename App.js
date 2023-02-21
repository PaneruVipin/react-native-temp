import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
const Stack = createNativeStackNavigator();
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View className="bg-red-500">
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};
export default function App() {
  const HeaderSetting = {
    header: () => <View className="h-10 bg-blue-300" />,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ ...HeaderSetting }}
        />
        <Stack.Screen
          name="Profile"
          options={{ ...HeaderSetting }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
