import React from "react";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { COUNT } from "../utils";
import { Input, InputField } from "@/components/ui/input";
import { CheckIcon, CircleIcon, ChevronDownIcon } from "@/components/ui/icon";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Radio,
  RadioIndicator,
  RadioIcon,
  RadioGroup,
  RadioLabel,
} from "@/components/ui/radio";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import colors from "tailwindcss/colors";
import { Heading } from "@/components/ui/heading";

const InputWithButton = ({ i = 0 }) => {
  return (
    <VStack className="align-items" space="md">
      <Input
        variant="outline"
        size="sm"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        testID={`text-input-${i}`}
      >
        <InputField placeholder="Enter Text here..." />
      </Input>
      <Button onPress={() => alert(`pressed ${i}`)} size="sm" variant="solid">
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
  );
};
const TextAreaInput = ({ index = 0 }) => (
  <Textarea>
    <TextareaInput
      testID={`text-area-${index}`}
      placeholder="Once upon a time..."
    />
  </Textarea>
);

const CheckBoxInput = ({ index = 0 }) => {
  return (
    <Checkbox
      testID={`checkbox-label-${index}`}
      size="sm"
      isInvalid={false}
      isDisabled={false}
    >
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
};

const SwitchInput = ({ index = 0 }) => (
  <HStack className="align-items items-center">
    <Switch
      defaultValue={true}
      trackColor={{ false: colors.gray[300], true: colors.gray[500] }}
      thumbColor={colors.gray[50]}
      activeThumbColor={colors.gray[50]}
      ios_backgroundColor={colors.gray[300]}
      size="sm"
      testID={`switch-${index}`}
    />
    <Text size="sm">Switch</Text>
  </HStack>
);

const DropdownInput = (index = 0) => (
  <Select>
    <SelectTrigger
      testID={`select-button-open-${index}`}
      variant="underlined"
      size="md"
    >
      <SelectInput placeholder="Select option" />
      <SelectIcon className="mr-3" as={ChevronDownIcon} />
    </SelectTrigger>
    <SelectPortal>
      <SelectBackdrop />
      <SelectContent>
        <SelectDragIndicatorWrapper>
          <SelectDragIndicator />
        </SelectDragIndicatorWrapper>
        <SelectItem
          testID={`select-menu-button-UX Research-${index}`}
          label="UX Research"
          value="ux"
        />
        <SelectItem label="Web Development" value="web" />
        <SelectItem
          label="Cross Platform Development Process"
          value="Cross Platform Development Process"
        />
        <SelectItem label="UI Designing" value="ui" isDisabled={true} />
        <SelectItem label="Backend Development" value="backend" />
      </SelectContent>
    </SelectPortal>
  </Select>
);

const RadioInput = ({ index = 0 }) => (
  <VStack space="md">
    <Heading size="sm">Which time slot works best for you?</Heading>
    <RadioGroup>
      <VStack space="sm">
        <Radio testID={`radio-button-Monday-${index}`} value="Monday" size="md">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Monday</RadioLabel>
        </Radio>
        <Radio
          testID={`radio-button-Tuesday-${index}`}
          value="Tuesday"
          size="md"
        >
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Tuesday</RadioLabel>
        </Radio>
        <Radio
          testID={`radio-button-Wednesday-${index}`}
          value="Wednesday"
          size="md"
        >
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Wednesday</RadioLabel>
        </Radio>
      </VStack>
    </RadioGroup>
    <Text className="text-sm text-light-500">
      Choose a time slot for the meeting
    </Text>
  </VStack>
);

const Gluestack = () => {
  return (
    <GluestackUIProvider>
      <HStack className="flex-wrap justify-around">
        {new Array(COUNT / 5).fill(0).map((_, i) => (
          <Box
            key={i}
            className={`w-40 m-2 border-2 border-black-500 rounded-md bg-gray-300`}
          >
            <VStack className="p-3 gap-2">
              <TextAreaInput />
              <CheckBoxInput />
              <SwitchInput />
              <RadioInput />
              <DropdownInput />
              <InputWithButton i={i} />
            </VStack>
          </Box>
        ))}
      </HStack>
    </GluestackUIProvider>
  );
};

export default Gluestack;
