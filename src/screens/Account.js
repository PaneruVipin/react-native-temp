import { FC, memo } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../../features/user/userActions";
import { logout } from "../../features/user/userSlice";
import { AuthGaurd, IfNoAuth } from "../../lib/AppGaurds";
import Auth from "../components/Auth";
import Profile from "../components/Profile";

const Account = ({ ...props }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((s) => s.user);
  const handlePress = () => {
    dispatch(logout);
  };
  return (
    <View>
      <AuthGaurd>
        <Profile user={userInfo} />
        <Button title="Logout" onPress={handlePress} />
      </AuthGaurd>
      <IfNoAuth>
        <Auth />
      </IfNoAuth>
    </View>
  );
};

Account.defaultProps = {};

export default memo(Account);
