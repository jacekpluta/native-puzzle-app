import React, { useContext, useState, useEffect } from "react";

import { AuthContext } from "./AuthProvider";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import LinkingConfiguration from "./LinkingConfiguration";
import { ColorSchemeName } from "react-native";

const Routes = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const { user, setUser } = useContext(AuthContext);

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
