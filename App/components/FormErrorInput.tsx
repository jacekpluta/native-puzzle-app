import React from "react";
import { Text, StyleSheet } from "react-native";

interface ErrorFormInputProps {
  touched: boolean | undefined;
  errors: any;
}
const FormErrorInput = ({ errors, touched }: ErrorFormInputProps) => {
  if (errors && touched) return <Text style={styles.error}>{errors}</Text>;

  return <Text style={styles.errorEmpty}></Text>;
};

export default FormErrorInput;

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
