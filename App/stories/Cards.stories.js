import React from "react";
import { storiesOf } from "@storybook/react-native";
import Card from "../components/Card";
import { View, StyleSheet } from "react-native";
import { text } from "@storybook/addon-knobs";

const cardStories = storiesOf("Card", module);

cardStories.add("default card", () => (
  <View style={styles.cardContainer}>
    <Card text={text("card text", "Edit text in addons")} />
  </View>
));

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
