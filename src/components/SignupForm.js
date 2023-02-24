import React from "react";
import { Button, Text, View } from "react-native";
import { Formik } from "formik";
import Input from "./attoms/Input";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { userSignup } from "../../features/auth/authActions";
export const SignupForm = ({}) => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    last_name: "",
    first_name: "",
    password: "",
  };
  const handleSubmit = (data) => {
    dispatch(userSignup(data));
  };
  const schema = object().shape({
    email: string().required().email(),
    last_name: string().required(),
    first_name: string().required(),
    password: string().required().min(8).max(20),
  });
  return (
    <View className="">
      {/* <Text className=" text-center text-2xl font-semibold font-mono mb-3">
        Signup Form
      </Text> */}
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
              error={errors.first_name}
              touched={touched.first_name}
              placeholder="First Name..."
              onChangeText={handleChange("first_name")}
              onBlur={handleBlur("first_name")}
              value={values.first_name}
            />
            <Input
              error={errors.last_name}
              touched={touched.last_name}
              placeholder="Last Name..."
              onChangeText={handleChange("last_name")}
              onBlur={handleBlur("last_name")}
              value={values.last_name}
            />
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
              <Button color="green" onPress={handleSubmit} title="Signup" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
