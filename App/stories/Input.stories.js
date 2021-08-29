import React from "react";
import { Input } from "../components/Input";
import {
  withKnobs,
  select,
  boolean,
  text,
  number,
  radios,
  color,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { BufferView } from "./decorators";
import { Text } from "react-native";

const types = ["text", "password"];

const validation = {
  error: "error",
  warning: "warning",
  success: "success",
  default: "default",
};

const inputStories = storiesOf("Inputs", module);

inputStories.addDecorator(BufferView).add("default input", () => (
  <>
    <Text>Input component: </Text>
    <Input
      placeholder={text("placeholder text", "placeholder")}
      placeholderColor={color("placeholder color", "#aaa")}
      disabled={boolean("is disabled", false)}
      type={select("input type", types, "text")}
      borderRadius={number("border radius", 0, {
        range: true,
        min: 0,
        max: 16,
        step: 2,
      })}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
    >
      <Text>Input </Text>
    </Input>
  </>
));
