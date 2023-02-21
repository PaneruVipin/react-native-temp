import { FC, memo } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ ...props }) => {
  return <TextInput {...props} style={styles.input} />;
};

Input.defaultProps = {};

export default memo(Input);

const styles = StyleSheet.create({
//   input: {
//     borderColor: "gray",
//     borderRadius: "10px",
//     paddingHorizontal: "8px",
//     borderWidth: "2px",
//   },
});
