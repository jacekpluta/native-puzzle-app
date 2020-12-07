<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import {
  BottomTabParamList,
  LoginParamList,
  RegisterParamList,
} from "../types";
=======
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
<<<<<<< HEAD
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
=======
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4
        }}
      />
    </BottomTab.Navigator>
  );
}

<<<<<<< HEAD
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: "Login your account" }}
      />
    </LoginStack.Navigator>
  );
}

const RegisterStack = createStackNavigator<RegisterParamList>();

function RegisterNavigator() {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerTitle: "Register new account" }}
      />
    </RegisterStack.Navigator>
=======
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4
  );
}
