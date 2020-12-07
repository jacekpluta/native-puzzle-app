// Formik x React Native example
import React from "react";
import {
  Button,
  GestureResponderEvent,
  TextInput,
  View,
  StyleSheet,
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

interface MyFormValues {
  name: string;
  password: string;
}

export const LoginForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { name: "", password: "" };

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
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              style={styles.inputField}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
          </View>
          <Button
            onPress={
              (handleSubmit as unknown) as (ev: GestureResponderEvent) => void
            }
            title="Submit"
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: window.height / 15,
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: "Lato-Regular",
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: window.width / 1.5,
    height: window.height / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
