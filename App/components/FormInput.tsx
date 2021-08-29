import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { window } from "../constants/Layout";
import { FontAwesome } from "@expo/vector-icons";

interface FormInputProps {
  labelValue: string;
  placeholderText: string;
  iconType: string;
  handleChange: any;
  handleBlur: any;
  type: string;
  touched: boolean | undefined;
  errors: any;
}

const FormInput = ({
  labelValue,
  placeholderText,
  iconType,
  handleChange,
  handleBlur,
  type,
  touched,
  errors,
  ...rest
}: FormInputProps) => {
  return (
    <View
      style={[styles.inputContainer, errors && touched && styles.errorInput]}
    >
      <View style={styles.iconStyle}>
        <FontAwesome name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={[styles.input]}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        onChangeText={handleChange(type)}
        onBlur={handleBlur(type)}
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    marginBottom: 2,
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
  errorInput: {
    borderColor: "red",
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: "normal",
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
