import React from "react";
import { View, StyleSheet } from "react-native";
import { COUNT } from "../utils";
import CheckBoxInput from "./NativeUI/CheckBoxInput";
import TextAreaInput from "./NativeUI/TextAreaInput";

import SwitchInput from "./NativeUI/SwitchInput";

import RadioInput from "./NativeUI/RadioInput";

import DropdownInput from "./NativeUI/DropdownInput";

import InputWithButton from "./NativeUI/InputWithButton";

const Demo = () => {
  return (
    <View style={styles.container}>
      {new Array(COUNT / 5).fill(0).map((_, i) => (
        <View key={i} style={styles.complexCard}>
          <TextAreaInput />
          <CheckBoxInput index={i} />
          <SwitchInput index={i} />
          <RadioInput index={i} />
          <DropdownInput />
          <InputWithButton index={i} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  complexCard: {
    width: 160,
    borderRadius: 8,
    backgroundColor: "darkgrey",
    padding: 5,
    gap: 5,
    elevation: 5,
    marginBottom: 15,
  },
});

export default Demo;
