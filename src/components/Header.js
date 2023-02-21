import { FC, memo } from "react";
import { Text, View } from "react-native";

const Header = ({ ...props }) => {
  return <View className="h-10 bg-blue-300">
  </View>;
};

Header.defaultProps = {};

export default memo(Header);
