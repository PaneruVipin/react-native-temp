import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Go back"
        accessibilityHint="Navigates to the previous screen"
        onPress={onPress}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Profile"
          options={{ title: "Profile" }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
