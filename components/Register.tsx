import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { RegisterForm } from "./RegisterForm";

export default function Register() {
  return (
    <View>
      <View style={styles.formContainer}>
        <RegisterForm></RegisterForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 8,
    flex: 1,
  },
});
