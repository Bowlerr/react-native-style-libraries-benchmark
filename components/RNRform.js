import React, { useState } from "react";
import { ScrollView, View, Alert } from "react-native";
import { Textarea as TextInput } from "~/reuseable/ui/textarea";
import { Button } from "~/reuseable/ui/button";
import { Checkbox } from "~/reuseable/ui/checkbox";
import { Switch } from "~/reuseable/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/reuseable/ui/select";
import { RadioGroup, RadioGroupItem } from "~/reuseable/ui/radio-group";
import { PortalHost } from "@rn-primitives/portal";
import { COUNT } from "../utils";
import { Label } from "~/reuseable/ui/label";
import { Card } from "~/reuseable/ui/card";
import { Text } from "~/reuseable/ui/text";

const InputWithButton = ({ i = 0 }) => {
  const [textValue, setTextValue] = useState("");

  return (
    <View className="space-y-2">
      <TextInput
        placeholder="Enter text here..."
        value={textValue}
        onChangeText={(val) => setTextValue(val)}
        className="border border-gray-300 p-2 rounded"
      />
      <Button variant="outline" onPress={() => Alert.alert(`Pressed ${i}`)}>
        <Text>Submit</Text>
      </Button>
    </View>
  );
};

const TextAreaInput = () => {
  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <TextInput
      placeholder="Once upon a time..."
      multiline
      value={textAreaValue}
      onChangeText={(val) => setTextAreaValue(val)}
      className="border border-gray-300 p-2 rounded h-24"
    />
  );
};

const CheckBoxInput = ({ i = 0 }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View className="flex-row items-center space-x-2">
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
        className="border border-gray-300"
      />
      <Text className="text-sm">Label {i}</Text>
    </View>
  );
};

const SwitchInput = ({ i = 0 }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  return (
    <View className="flex-row items-center space-x-2 gap-2">
      <Switch
        nativeID="switch"
        checked={isSwitchOn}
        onCheckedChange={setIsSwitchOn}
      />
      <Label nativeID="switch" className="text-sm">
        Switch {i}
      </Label>
    </View>
  );
};

const DropdownInput = () => {
  const [selectedValue, setSelectedValue] = useState("ux");

  return (
    <Select
      value={selectedValue}
      onValueChange={setSelectedValue}
      placeholder="Select an option"
      className="border border-gray-300 p-2 rounded"
    >
      <SelectTrigger>
        <SelectValue
          className="text-foreground text-sm native:text-lg"
          placeholder="Select a fruit"
        />
      </SelectTrigger>
      <SelectContent
        sideOffset={100}
        side="top"
        align="start"
        position="item-aligned"
      >
        <SelectGroup className="bg-white">
          <SelectLabel>Options</SelectLabel>
          <SelectItem value="ux" label="UX Research" />
          <SelectItem value="web" label="Web Development" />
          <SelectItem value="cpdp" label="Cross Platform Development Process" />
          <SelectItem value="backend" label="Backend Development" />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const RadioGroupItemWithLabel = ({ value, onLabelPress }) => {
  return (
    <View className={"flex-row gap-2 items-center"}>
      <RadioGroupItem aria-labelledby={`label-for-${value}`} value={value} />
      <Label nativeID={`label-for-${value}`} onPress={onLabelPress}>
        {value}
      </Label>
    </View>
  );
};

const RadioInput = ({ i = 0 }) => {
  const [radioValue, setRadioValue] = useState("");

  return (
    <View className="space-y-2">
      <Text className="font-bold text-sm">
        Which time slot works best for you?
      </Text>
      <RadioGroup
        value={radioValue}
        onValueChange={setRadioValue}
        className="space-y-2"
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
    <>
      <ScrollView contentContainerStyle={{ paddingVertical: 16 }}>
        <View className="flex-row flex-wrap justify-between">
          {new Array(COUNT / 5).fill(0).map((_, i) => (
            <Card
              key={i}
              className="w-40 border border-gray-400 p-4 rounded bg-gray-100 m-2 gap-2"
            >
              <TextAreaInput />
              <CheckBoxInput i={i} />
              <SwitchInput i={i} />
              <RadioInput i={i} />
              <DropdownInput />
              <InputWithButton i={i} />
            </Card>
          ))}
        </View>
      </ScrollView>
      <PortalHost />
    </>
  );
};

export default Demo;
