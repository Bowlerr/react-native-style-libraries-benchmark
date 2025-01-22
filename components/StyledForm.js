import React from "react";
import { View, StyleSheet } from "react-native";
import { COUNT } from "../utils";
import styled from "styled-components/native";

import CheckBoxInput from "./StyledUI/CheckBoxInput";
import TextAreaInput from "./StyledUI/TextAreaInput";

import SwitchInput from "./StyledUI/SwitchInput";

import RadioInput from "./StyledUI/RadioInput";

import DropdownInput from "./StyledUI/DropdownInput";

import InputWithButton from "./StyledUI/InputWithButton";

const StyledBox = styled.View`
  width: 160px;
  padding: 5px;
  gap: 16px;
  border-radius: 5px;
  border-color: black;
  border-width: 2;

  margin-bottom: 10px;
  background-color: darkgray;
`;

const Demo = () => {
  return (
    <View style={styles.container}>
      {new Array(COUNT / 5).fill(0).map((_, i) => (
        <StyledBox key={i}>
          <TextAreaInput index={i} />
          <CheckBoxInput index={i} />
          <SwitchInput index={i} />
          <RadioInput index={i} />
          <DropdownInput index={i} />
          <InputWithButton index={i} />
        </StyledBox>
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
});

export default Demo;
