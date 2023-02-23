import { FC, memo } from "react";
import { Image } from "react-native";

const Logo = ({ ...props }) => {
  return (
    <Image
      className="w-10 h-10 rounded-md"
      source={require("../../../assets/teachtech.png")}
    ></Image>
  );
};

Logo.defaultProps = {};

export default memo(Logo);
