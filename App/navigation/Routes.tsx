import React from "react";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import AppStack from "./AppStack";
import LinkingConfiguration from "./LinkingConfiguration";
import { ColorSchemeName } from "react-native";

const Routes = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AppStack></AppStack>
    </NavigationContainer>
  );
};

export default Routes;
