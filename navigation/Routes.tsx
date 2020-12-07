import React, { useContext, useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
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
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
