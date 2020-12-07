import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import { LoginForm } from "../components/LoginForm";
import { RootStackParamList } from "../types";

type ProfileScreenNavigationProp = NavigationScreenProp<
  RootStackParamList,
  "Register"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: "#dfffe1" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#dfffe1" />
      <LoginForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
