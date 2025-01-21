import React, { useState } from "react";
import { StyleSheet, Alert, ScrollView } from "react-native";
import {
  Checkbox,
  Switch,
  RadioGroup,
  Text,
  View,
  RadioButton,
  Picker,
  Button,
  Incubator,
} from "react-native-ui-lib";

import { COUNT } from "../utils"; // Or define it e.g. const COUNT = 3;

const { TextField } = Incubator;

const InputWithButton = ({ i = 0 }) => {
  const [textValue, setTextValue] = useState("");

  return (
    <View style={styles.yStack}>
      <TextField
        placeholder="Enter Text here..."
        value={textValue}
        onChangeText={setTextValue}
        style={styles.textInput}
      />
      <Button
        label="Submit"
        onPress={() => Alert.alert(`Pressed ${i}`)}
        style={styles.button}
      />
    </View>
  );
};

const TextAreaInput = () => {
  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <TextField
      placeholder="Once upon a time..."
      multiline
      value={textAreaValue}
      onChangeText={setTextAreaValue}
      style={[styles.textInput, styles.textArea]}
    />
  );
};

const CheckBoxInput = ({ i = 0 }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.xStack}>
      <Checkbox
        value={checked}
        onValueChange={() => setChecked(!checked)}
        color="#000"
      />
      <Text style={styles.label}>Label {i}</Text>
    </View>
  );
};

const SwitchInput = ({ i = 0 }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.xStack}>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        onColor="#0288D1"
        offColor="#999"
      />
      <Text style={styles.label}>Switch {i}</Text>
    </View>
  );
};

const DropdownInput = () => {
  const [selectedValue, setSelectedValue] = useState("ux");

  return (
    <Picker
      placeholder="Select Option"
      value={selectedValue}
      onChange={(item) => setSelectedValue(item)}
      style={styles.picker}
      topBarProps={{ title: "Options" }}
    >
      <Picker.Item label="UX Research" value="ux" />
      <Picker.Item label="Web Development" value="web" />
      <Picker.Item label="Cross Platform Development Process" value="cpdp" />
      <Picker.Item label="backend" value="backend" />
    </Picker>
  );
};

function RadioGroupItemWithLabel({ value, label }) {
  return (
    <View style={styles.xStack}>
      <RadioButton value={value} label={label} labelStyle={styles.label} />
    </View>
  );
}

const RadioInput = ({ i = 0 }) => {
  const [radioValue, setRadioValue] = useState("");

  return (
    <View style={styles.yStack}>
      <Text style={styles.heading}>Which time slot works best for you?</Text>
      <RadioGroup
        initialValue={radioValue}
        onValueChange={(val) => setRadioValue(val)}
      >
        <RadioGroupItemWithLabel value={`Mon_${i}`} label="Monday" />
        <RadioGroupItemWithLabel value={`Tue_${i}`} label="Tuesday" />
        <RadioGroupItemWithLabel value={`Wed_${i}`} label="Wednesday" />
      </RadioGroup>
    </View>
  );
};

const Demo = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {new Array(COUNT / 5).fill(0).map((_, i) => (
        <View key={i} style={styles.itemContainer}>
          <View style={styles.innerContent}>
            <TextAreaInput />
            <CheckBoxInput i={i} />
            <SwitchInput i={i} />
            <RadioInput i={i} />
            <DropdownInput />
            <InputWithButton i={i} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingVertical: 16,
  },
  itemContainer: {
    width: 140,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: "grey",
    margin: 8,
    alignItems: "center",
  },
  innerContent: {
    padding: 12,
  },
  xStack: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  yStack: {
    marginBottom: 12,
  },
  textInput: {
    marginBottom: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#CCC",
  },
  textArea: {
    height: 80,
  },
  button: {
    marginTop: 6,
  },
  label: {
    marginLeft: 8,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 6,
  },
  picker: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#CCC",
    backgroundColor: "white",
    fontWeight: "bold",
    fontSize: 7,
    padding: 10,
    height: 20,
    marginBottom: 8,
  },
});

export default Demo;
