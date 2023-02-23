import { FC, memo } from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const HeaderRightPart = ({ navigation, route }) => {
  const routeName = route.name;
  const bellColor = routeName == "Notifications" ? "blue" : "gray";
  const accountColor = routeName == "Account" ? "blue" : "gray";
  return (
    <View className="flex flex-row gap-x-3">
      <View
        className={`p-0.5 text-gray-300 rounded-full border border-gray-300 flex justify-center items-center`}
      >
        <Text>
          <MaterialCommunityIcons
            onPress={() => navigation.navigate("Notifications")}
            name="bell"
            color={bellColor}
            size={20}
          />
        </Text>
      </View>
      <View
        className={`p-0.5 text-gray-300 rounded-full border border-gray-300 flex justify-center items-center`}
      >
        <Text>
          <MaterialCommunityIcons
            onPress={() => navigation.navigate("Account")}
            name="account"
            color={accountColor}
            size={22}
          />
        </Text>
      </View>
    </View>
  );
};
