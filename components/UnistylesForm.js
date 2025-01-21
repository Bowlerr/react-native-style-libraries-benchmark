import React from "react";
import { View } from "react-native";
import { ScopedTheme, StyleSheet } from "react-native-unistyles";
import { COUNT } from "../utils";
import CheckBoxInput from "./unistyleUI/CheckBoxInput";
import TextAreaInput from "./unistyleUI/TextAreaInput";

import SwitchInput from "./unistyleUI/SwitchInput";

import RadioInput from "./unistyleUI/RadioInput";

import DropdownInput from "./unistyleUI/DropdownInput";

import InputWithButton from "./unistyleUI/InputWithButton";
import SwitchInputAni from "./unistyleUI/SwitchInputAnimated";

const Demo = () => {
  return (
    <View style={styles.container}>
      {new Array(COUNT / 5).fill(0).map((_, i) => (
        <ScopedTheme key={i} name={i % 2 === 0 ? "dark" : "light"}>
          <View key={i} style={styles.complexCard}>
            <TextAreaInput />
            <CheckBoxInput index={i} />
            <SwitchInput index={i} />
            <RadioInput index={i} />
            <DropdownInput />
            <InputWithButton index={i} />
          </View>
        </ScopedTheme>
      ))}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  complexCard: {
    width: 160,
    padding: 5,
    gap: theme.spacing.m,
    backgroundColor: theme.colors.gray,
    borderRadius: theme.spacing.xs,
    marginBottom: theme.spacing.s,
  },
}));

export default Demo;
