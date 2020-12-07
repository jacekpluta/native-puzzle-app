import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from "react-native";
import { window } from "../constants/Layout";

interface FormButtonProps {
  buttonTitle: string;
  handleSubmit: any;
  isSubmitting: boolean;
}

const FormButton = ({
  buttonTitle,
  handleSubmit,
  isSubmitting,
  ...rest
}: FormButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      {...rest}
      onPress={(handleSubmit as unknown) as (ev: GestureResponderEvent) => void}
    >
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
    height: window.height / 15,
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "normal",
  },
});
