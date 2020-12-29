// Formik x React Native example
import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Formik, FormikHelpers } from "formik";
import { window } from "../constants/Layout";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { AuthContext } from "../services/UserActions";
import * as Yup from "yup";
import ErrorFormInput from "./FormErrorInput";

export interface MyFormValues {
  username: string;
  password: string;
  passwordRepeat: string;
}

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    // .min(3, "Too Short!")
    // .max(30, "Too Long!")
    .required("Username is required"),
  password: Yup.string()
    // .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    // .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    // .matches(/\d/, "Password must have a number")
    // // .matches(
    // //   /[!@#$%^&*()\-_"=+{}; :,<.>]/,
    // //   "Password must have a special character"
    // // )
    // .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export const RegisterForm: React.FC<{ navigation: any }> = ({ navigation }) => {
  const initialValues: MyFormValues = {
    username: "",
    password: "",
    passwordRepeat: "",
  };

  const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));

  // const handleRegister = async (values: {
  //   UsernameRegister: string;
  //   PasswordRegister: string;
  // }) => {
  //   try {
  //     dispatch(loginSuccess(loadingTrue));

  //     const result = await RegisterWithToken(
  //       values.UsernameRegister,
  //       values.PasswordRegister
  //     );

  //     if (result.status === 200 && result.token) {
  //       dispatch(loginSuccess(loadingFalse));
  //       window.localStorage.setItem("token", result.token);
  //       dispatch(registerSuccess(result));
  //       history.push(`/game`);
  //     } else {
  //       dispatch(loginSuccess(loadingFalse));
  //       setError(true);
  //       setErrorMessage(result.message);
  //     }
  //   } catch (err) {
  //     dispatch(loginSuccess(loadingFalse));
  //     setError(true);
  //     setErrorMessage("Unknown error. Please reload the page and try again.");
  //   }
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={async (
        values: MyFormValues,
        { setSubmitting }: FormikHelpers<MyFormValues>
      ) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
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
          <Text style={styles.text}>Register</Text>

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

          <FormInput
            touched={touched.passwordRepeat}
            errors={errors.passwordRepeat}
            labelValue={values.passwordRepeat}
            placeholderText={"Repeat password"}
            type={"passwordRepeat"}
            iconType={"chain"}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormInput>
          <ErrorFormInput
            touched={touched.passwordRepeat}
            errors={errors.passwordRepeat}
          />

          <FormButton
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
            buttonTitle="Submit"
          />

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.navButtonText}>
              Already have an acount? Go here
            </Text>
          </TouchableOpacity>
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
    height: 10,
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
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "normal",
  },
});
