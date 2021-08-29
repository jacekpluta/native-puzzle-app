import React from "react";
import { storiesOf } from "@storybook/react-native";
import Button from "../components/Button";
import { Text } from "react-native";
import { action } from "@storybook/addon-actions";
import { BufferView } from "./decorators";

const buttonStories = storiesOf("Buttons", module);

const colorOptions = ["hotpink", "cyan"];

buttonStories
  .addDecorator(BufferView)
  .add("default button", () => (
    <Button onPress={action("tapped-default")}>
      <Text>Press Me </Text>
    </Button>
  ))
  .add("outline button", () => (
    <Button outline onPress={action("tapped-outline")}>
      <Text>Press Me </Text>
    </Button>
  ));
// .add("pick the color", () => (
//   <Button
//     onPress={action("tapped-options")}
//     backgroundColor={radios("color", colorOptions, colorOptions[0])}
//   >
//     <Text>pick color in addons tab </Text>
//   </Button>
// ));
