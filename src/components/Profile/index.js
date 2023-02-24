import { FC, memo } from "react";
import { Text, View } from "react-native";

const index = ({ user, ...props }) => {
  return (
    <View className="border border-gray-300 px-4 py-4">
      <View className="space-y-1">
        <Text className="font-bold">First Name</Text>
        <Text className="border px-3 text-black text-xl font-bold rounded-md border-gray-600 py-1">
          {user?.first_name}
        </Text>
      </View>
      <View className="space-y-1">
        <Text className="font-bold">Last Name</Text>
        <Text className="border px-3 text-black text-xl font-bold rounded-md border-gray-600 py-1">
          {user?.last_name}
        </Text>
      </View>
      <View className="space-y-1">
        <Text className="font-bold">Email</Text>
        <Text className="border px-3 text-black text-xl font-bold rounded-md border-gray-600 py-1">
          {user?.email}
        </Text>
      </View>
    </View>
  );
};

index.defaultProps = {};

export default memo(index);
