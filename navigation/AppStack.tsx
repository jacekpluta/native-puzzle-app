import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  BottomTabParamList,
  LoginParamList,
  RegisterParamList,
} from "../types";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const AppStack = () => {
  return (
    <BottomTab.Navigator initialRouteName="Login">
      <BottomTab.Screen
        name="Login"
        component={LoginNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="login" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Register"
        component={RegisterNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="chain" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const RegisterStack = createStackNavigator<RegisterParamList>();

function RegisterNavigator() {
  return (
    <RegisterStack.Navigator headerMode="none">
      <RegisterStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </RegisterStack.Navigator>
  );
}

export default AppStack;
