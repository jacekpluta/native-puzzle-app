import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import React, { useEffect, useState } from "react";

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: Colors.secondary,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginVertical: 7,
  },
  text: {
    color: Colors.white,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  textOutline: {
    color: Colors.white,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ({
  onPress = () => {},
  children = "",
  outline = false,
}: any) => {
  const [containerStyle, setContainerStyle] = useState([style.container]);
  const [textStyle, setTextStyle] = useState([style.text]);

  useEffect(() => {
    if (outline) {
      setContainerStyle([style.containerOutline]);
      setTextStyle([style.textOutline]);
    }
  }, [outline]);

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
