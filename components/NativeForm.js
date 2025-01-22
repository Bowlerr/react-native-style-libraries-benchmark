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
          <TextAreaInput index={i} />
          <CheckBoxInput index={i} />
          <SwitchInput index={i} />
          <RadioInput index={i} />
          <DropdownInput index={i} />
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
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    gap: 16,
    backgroundColor: "darkgrey",
    marginBottom: 10,
  },
});

export default Demo;
