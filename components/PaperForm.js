import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Provider as PaperProvider,
  Text,
  Button,
  TextInput,
  Checkbox,
  Switch,
  RadioButton,
  Menu,
  Divider,
} from "react-native-paper";

import { COUNT } from "../utils";

const InputWithButton = ({ i = 0 }) => {
  const [textValue, setTextValue] = useState("");

  return (
    <View style={styles.yStack}>
      <TextInput
        mode="outlined"
        placeholder="Enter Text here..."
        value={textValue}
        onChangeText={(val) => setTextValue(val)}
        style={styles.textInput}
        testID={`text-input-${i}`}
      />
      <Button
        mode="contained"
        onPress={() => Alert.alert(`Pressed ${i}`)}
        style={styles.button}
      >
        Submit
      </Button>
    </View>
  );
};

const TextAreaInput = ({ index = 0 }) => {
  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <TextInput
      testID={`text-area-${index}`}
      mode="outlined"
      multiline
      numberOfLines={4}
      placeholder="Once upon a time..."
      value={textAreaValue}
      onChangeText={(val) => setTextAreaValue(val)}
      style={[styles.textInput, styles.textArea]}
    />
  );
};

const CheckBoxInput = ({ i = 0 }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.xStack}>
      <Checkbox
        testID={`checkbox-label-${i}`}
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
        backgroundColor="white"
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
        testID={`switch-${i}`}
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
      />
      <Text style={styles.label}>Switch {i}</Text>
    </View>
  );
};

const DropdownInput = ({ index = 0 }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("ux");

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleSelect = (val) => {
    setSelectedValue(val);
    closeMenu();
  };

  return (
    <Menu
      visible={menuVisible}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity
          testID={`select-button-open-${index}`}
          onPress={openMenu}
          style={styles.dropdownAnchor}
        >
          <Text style={styles.dropdownAnchorText}>
            {selectedValue ? selectedValue : "Select Option"}
          </Text>
        </TouchableOpacity>
      }
    >
      <Menu.Item
        testID={`select-menu-button-UX Research-${index}`}
        onPress={() => handleSelect("UX Research")}
        title="UX Research"
      />
      <Menu.Item
        onPress={() => handleSelect("Web Development")}
        title="Web Development"
      />
      <Menu.Item
        onPress={() => handleSelect("Cross Platform Development Process")}
        title="Cross Platform Development Process"
      />
      <Divider />
      <Menu.Item onPress={() => handleSelect("backend")} title="backend" />
    </Menu>
  );
};

function RadioGroupItemWithLabel({
  label,
  value,
  selectedValue,
  onValueChange,
  index,
}) {
  return (
    <TouchableOpacity
      style={styles.xStack}
      onPress={() => onValueChange(value)}
      activeOpacity={0.7}
    >
      <RadioButton
        value={value}
        status={selectedValue === value ? "checked" : "unchecked"}
        onPress={() => onValueChange(value)}
        backgroundColor="white"
        testID={`radio-button-${label}-${index}`}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const RadioInput = ({ i = 0 }) => {
  const [radioValue, setRadioValue] = useState("");

  return (
    <View style={styles.yStack}>
      <Text style={styles.heading}>Which time slot works best for you?</Text>
      <RadioGroupItemWithLabel
        label="Monday"
        value={`Mon_${i}`}
        selectedValue={radioValue}
        onValueChange={(val) => setRadioValue(val)}
        index={i}
      />
      <RadioGroupItemWithLabel
        label="Tuesday"
        value={`Tue_${i}`}
        selectedValue={radioValue}
        onValueChange={(val) => setRadioValue(val)}
        index={i}
      />
      <RadioGroupItemWithLabel
        label="Wednesday"
        value={`Wed_${i}`}
        selectedValue={radioValue}
        onValueChange={(val) => setRadioValue(val)}
        index={i}
      />
    </View>
  );
};

const Demo = () => {
  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {new Array(COUNT / 5).fill(0).map((_, i) => (
          <View key={i} style={styles.itemContainer}>
            <TextAreaInput index={i} />
            <CheckBoxInput i={i} />
            <SwitchInput i={i} />
            <RadioInput i={i} />
            <DropdownInput index={i} />
            <InputWithButton i={i} />
          </View>
        ))}
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  itemContainer: {
    width: 160,
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    gap: 16,
    backgroundColor: "darkgrey",
    marginBottom: 10,
  },
  innerContent: {
    padding: 12,
  },
  xStack: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  yStack: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginLeft: 8,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
  textInput: {
    maxHeight: 40,
    marginBottom: 6,
  },
  textArea: {
    maxHeight: 80,
  },
  button: {
    marginTop: 4,
  },
  dropdownAnchor: {
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 4,
    marginBottom: 6,
  },
  dropdownAnchorText: {
    fontSize: 14,
  },
});

export default Demo;
