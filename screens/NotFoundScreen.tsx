<<<<<<< HEAD
import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RootStackParamList } from "../types";

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "NotFound">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
=======
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
=======
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4
    padding: 20,
  },
  title: {
    fontSize: 20,
<<<<<<< HEAD
    fontWeight: "bold",
=======
    fontWeight: 'bold',
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
<<<<<<< HEAD
    color: "#2e78b7",
=======
    color: '#2e78b7',
>>>>>>> 3566f30ea85a8a827cda644e8ee9b34df28219c4
  },
});
