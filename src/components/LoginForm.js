import React from "react";
import { Button, Text, View } from "react-native";
import { Formik } from "formik";
import Input from "./attoms/Input";
import { object, string } from "yup";
export const LoginForm = ({ submit }) => {
  const initialValues = { email: "", password: "" };
  const handleSubmit = (data) => {
    submit(data);
  };
  const schema = object().shape({
    email: string().required().email(),
    password: string().required().min(8).max(20),
  });
  return (
    <View className="">
      <Text className=" text-center text-2xl font-semibold font-mono mb-3">
        Login Form
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View className="space-y-4">
            <Input
              error={errors.email}
              touched={touched.email}
              placeholder="Email..."
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />

            <Input
              error={errors.password}
              touched={touched.password}
              placeholder="Password..."
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <View className="rounded-md">
              <Button color="green" onPress={handleSubmit} title="Login" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};