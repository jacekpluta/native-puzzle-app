import React from "react";
import { TextInput } from "react-native-paper";
import { Text } from "react-native";

//    type = { type };
//    placeholder = { placeholder };
//    placeholderColor = { placeholderColor };
//    disabled = { disabled };
//    validation = { validation };
//    borderRadius = { borderRadius };
//    onFocus = { onFocus };
// onBlur = { onBlur };

export const Input = ({ placeholder, children }: any) => {
  return (
    <TextInput placeholder={placeholder}>
      <Text>{children}</Text>
    </TextInput>
  );
};
