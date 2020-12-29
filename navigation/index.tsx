import * as React from "react";
import { ColorSchemeName } from "react-native";
import Routes from "./Routes";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return <Routes colorScheme={colorScheme} />;
}
