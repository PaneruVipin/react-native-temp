import { FC, memo } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

export const AuthGaurd = ({ children, ...props }) => {
  const { role } = useSelector((s) => s.user);
  return <View>{role && children}</View>;
};

export const AccessGaurd = ({ access = [] }) => {
  const { role } = useSelector((s) => s.user);
  const condition = access.includes(role);
  return <View>{condition && children}</View>;
};

export const IfNoAuth = ({ children }) => {
  const { role } = useSelector((s) => s.user);
  return <View>{!role && children}</View>;
};
