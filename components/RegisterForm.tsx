// Formik x React Native example
import React, { useContext } from "react";
import {
  Button,
  GestureResponderEvent,
  TextInput,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { window } from "../constants/Layout";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import SocialButton from "./SocialButton";
import { AuthContext } from "../navigation/AuthProvider";

interface MyFormValues {
  name: string;
  password: string;
  passwordRepeat: string;
}

export const RegisterForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    name: "",
    password: "",
    passwordRepeat: "",
  };

  const { login, googleLogin, fbLogin } = useContext(AuthContext);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <Image
            source={require(".././assets/images/adaptive-icon.png")}
            style={styles.logo}
          />
          <Text style={styles.text}>RN Social App</Text>

          <FormInput
            labelValue={values.name}
            placeholderText={"Username"}
            iconType={"login"}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormInput>
          <FormInput
            labelValue={values.password}
            placeholderText={"Password"}
            iconType={"login"}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormInput>
          <FormInput
            labelValue={values.passwordRepeat}
            placeholderText={"Repeat password"}
            iconType={"login"}
            handleChange={handleChange}
            handleBlur={handleBlur}
          ></FormInput>

          <FormButton handleSubmit={handleSubmit} buttonTitle="Submit" />

          <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
          </TouchableOpacity>

          {Platform.OS === "android" ? (
            <View>
              <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
              />

              <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
              />
            </View>
          ) : null}

          <TouchableOpacity
            style={styles.forgotButton}
            // onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.navButtonText}>
              Don't have an acount? Create here
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
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  text: {
    fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Lato-Regular",
  },
});
