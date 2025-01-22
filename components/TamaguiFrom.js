import React, { useState } from "react";
import {
  TamaguiProvider,
  Stack,
  TextArea,
  YStack,
  XStack,
  Checkbox,
  Label,
  Switch,
  Select,
  RadioGroup,
  Heading,
  Input,
  Button,
} from "tamagui";
import { COUNT } from "../utils";
import config from "../tamagui.config";
import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";

const InputWithButton = ({ i = 0 }) => {
  return (
    <YStack alignItems="center" gap="$2">
      <Input size={"$2"} placeholder={"Enter Text here..."} />
      <Button onPress={() => alert(`pressed ${i}`)} size="$2">
        Submit
      </Button>
    </YStack>
  );
};
const TextAreaInput = () => (
  <TextArea size="$4" placeholder="Once upon a time..." />
);

const CheckBoxInput = ({ i = 0 }) => {
  const id = `checkbox_${i}`;
  return (
    <XStack alignItems="center" gap="$4">
      <Checkbox id={id} size={"$2"}>
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox>

      <Label color={"black"} size={"$2"} htmlFor={id}>
        Label
      </Label>
    </XStack>
  );
};

const SwitchInput = ({ i = 0 }) => {
  const id = `switch_${i}`;
  return (
    <XStack alignItems="center" gap="$4">
      <Switch id={id} size={"$2"} defaultChecked>
        <Switch.Thumb />
      </Switch>
      <Label size={"$2"} htmlFor={id}>
        Switch
      </Label>
    </XStack>
  );
};

const DropdownInput = () => {
  const [val, setVal] = useState("ux");
  return (
    <Select value={val} onValueChange={setVal} disablePreventBodyScroll>
      <Select.Trigger width={220} iconAfter={ChevronDown}>
        <Select.Value placeholder="Select Option" />
      </Select.Trigger>
      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
        </Select.ScrollUpButton>

        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <Select.Group>
            <Select.Item index={"UX Research"} key={"UX Research"} value={"ux"}>
              <Select.ItemText>{"UX Research"}</Select.ItemText>
              <Select.ItemIndicator marginLeft="auto">
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item
              index={"Web Development"}
              key={"Web Development"}
              value={"web"}
            >
              <Select.ItemText>{"Web Development"}</Select.ItemText>
              <Select.ItemIndicator marginLeft="auto">
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item
              index={"Cross Platform Development Process"}
              key={"Cross Platform Development Process"}
              value={"Cross Platform Development Process"}
            >
              <Select.ItemText>
                {"Cross Platform Development Process"}
              </Select.ItemText>
              <Select.ItemIndicator marginLeft="auto">
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item
              index={"Cross Platform Development Process"}
              key={"Cross Platform Development Process"}
              value={"ux"}
            >
              <Select.ItemText>{"backend"}</Select.ItemText>
              <Select.ItemIndicator marginLeft="auto">
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Group>
          <YStack
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            alignItems="center"
            justifyContent="center"
            width={"$4"}
            pointerEvents="none"
          >
            <ChevronDown size={"$true"} />
          </YStack>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
};

export function RadioGroupItemWithLabel({ size, value, label }) {
  const id = `radiogroup-${value}`;
  return (
    <XStack alignItems="center" gap="$4">
      <RadioGroup.Item value={value} id={id} size={size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}

const RadioInput = ({ i = 0 }) => (
  <RadioGroup
    aria-labelledby="Select one time slot works best for you?"
    name="form"
  >
    <YStack alignItems="flex-start" gap="$2">
      <Heading size="$2">Which time slot works best for you?</Heading>
      <RadioGroupItemWithLabel size="$2" value={`2${i}`} label="Monday" />
      <RadioGroupItemWithLabel size="$2" value={`3${i}`} label="Tuesday" />
      <RadioGroupItemWithLabel size="$2" value={`4${i}`} label="Wednesday" />
    </YStack>
  </RadioGroup>
);
const Demo = () => {
  return (
    <TamaguiProvider config={config}>
      <YStack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        {new Array(COUNT / 5).fill(0).map((_, i) => (
          <Stack
            width={140}
            key={i}
            borderColor="black"
            borderWidth={2}
            borderRadius={"$2"}
            justifyContent="center"
            alignItems="center"
            backgroundColor={"gray"}
            margin={"$2"}
          >
            <YStack padding={"$3"} gap={"$2"}>
              <TextAreaInput />
              <CheckBoxInput i={i} />
              <SwitchInput i={i} />
              <RadioInput i={i} />
              <DropdownInput />
              <InputWithButton i={i} />
            </YStack>
          </Stack>
        ))}
      </YStack>
    </TamaguiProvider>
  );
};

export default Demo;
