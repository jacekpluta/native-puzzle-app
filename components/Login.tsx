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
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <View>
      <View style={styles.formContainer}>
        <LoginForm></LoginForm>
      </View>
    </View>
  );
}

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
//   );
// }

const styles = StyleSheet.create({
  formContainer: {
    padding: 8,
    flex: 1,
  },
});
