import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { Formik } from "formik";
import Input from "./attoms/Input";

export const SignupForm = ({ submit }) => {
  const initialValues = { email: "" };
  const handleSubmit = (data) => {
    submit(data);
  };
  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <Input
              placeholder="Your Name..."
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            <Input
              placeholder="Email..."
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Input
              placeholder="Password..."
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // rowGap:"30px",
    // columnGap:"30px"
  },
});
