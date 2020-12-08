import * as React from "react";
import { ColorSchemeName } from "react-native";
import { AuthProvider } from "../services/AuthProvider";
import Routes from "./Routes";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <AuthProvider>
      <Routes colorScheme={colorScheme} />
    </AuthProvider>
  );
}
