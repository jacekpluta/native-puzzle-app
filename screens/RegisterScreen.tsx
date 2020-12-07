import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { RegisterForm } from "../components/RegisterForm";
import { NavigationScreenProp } from "react-navigation";
import { RootStackParamList } from "../types";

type ProfileScreenNavigationProp = NavigationScreenProp<
  RootStackParamList,
  "Register"
>;
type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function RegisterScreen({ navigation }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: "#dfffe1" }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#dfffe1" />
      <RegisterForm navigation={navigation}></RegisterForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
