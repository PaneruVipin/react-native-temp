import { FC, memo } from "react";
import { Text, View } from "react-native";
import { AuthGaurd, IfNoAuth } from "../../lib/AppGaurds";
import Auth from "../components/Auth";

const Account = ({ ...props }) => {
  return (
    <View>
      <AuthGaurd>
        <Text>Hello world</Text>
      </AuthGaurd>
      <IfNoAuth>
        <Auth />
      </IfNoAuth>
    </View>
  );
};

Account.defaultProps = {};

export default memo(Account);
