import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Formik, FormikHelpers } from "formik";
import { window } from "../constants/Layout";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import SocialButton from "./SocialButton";
import * as Yup from "yup";
import ErrorFormInput from "./FormErrorInput";
import AsyncStorage from "@react-native-community/async-storage";

import { loginUser } from "../services/UserActions";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface MyFormValues {
  username: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    // .min(3, "Too Short!")
    // .max(30, "Too Long!")
    .required("Username is required"),
  password: Yup.string()
    // .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    // .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    // .matches(/\d/, "Password must have a number")
    // .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export const LoginForm: React.FC<{ navigation: any }> = ({ navigation }) => {
  const initialValues: MyFormValues = {
    username: "",
    password: "",
  };

  const user = useSelector((state: RootState) => state.user);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={async (
        values: MyFormValues,
        { setSubmitting }: FormikHelpers<MyFormValues>
      ) => {
        loginUser(values.username, values.password);

        // console.log(state);

        // console.log(AsyncStorage.getItem("token"));

        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isSubmitting,
        touched,
        errors,
      }) => (
        <View style={styles.container}>
          <Image
            source={require(".././assets/images/puzzles.png")}
            style={styles.logo}
          />
          <Text style={styles.text}>Login</Text>

          <FormInput
            touched={touched.username}
            errors={errors.username}
            labelValue={values.username}
            placeholderText={"Username"}
            iconType={"user"}
            type={"username"}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormInput>
          <ErrorFormInput touched={touched.username} errors={errors.username} />

          <FormInput
            touched={touched.password}
            errors={errors.password}
            labelValue={values.password}
            placeholderText={"Password"}
            type={"password"}
            iconType={"chain"}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormInput>
          <ErrorFormInput touched={touched.password} errors={errors.password} />
          <FormButton
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
            buttonTitle="Submit"
          />

          <TouchableOpacity
            style={styles.forgotButton}
            // onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.navButtonText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.navButtonText}>
              Don't have an acount? Create here
            </Text>
          </TouchableOpacity>

          <View>
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => {}}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  error: {
    fontSize: 10,
    color: "red",
  },
  errorEmpty: {
    height: 13,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: "cover",
  },
  text: {
    fontFamily: "normal",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "normal",
  },
});
