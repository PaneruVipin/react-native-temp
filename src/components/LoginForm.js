import React from "react";
import { Button, Text, View } from "react-native";
import { Formik } from "formik";
import Input from "./attoms/Input";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/auth/authActions";
export const LoginForm = ({}) => {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };
  const handleSubmit = (data) => {
    dispatch(userLogin(data));
  };
  const schema = object().shape({
    email: string().required().email(),
    password: string().required().min(8).max(20),
  });
  return (
    <View className="">
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
