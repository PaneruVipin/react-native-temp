import { FC, memo } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

const Input = ({ error, touched, ...props }) => {
  return (
    <View>
      <TextInput
        {...props}
        className="inline-block rounded-md px-3 py-1 border border-gray-400"
      />
      {error && touched && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

Input.defaultProps = {};

export default memo(Input);

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderColor: "#808080",
    borderRadius: 6,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
});
