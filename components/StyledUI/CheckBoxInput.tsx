import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Box = styled(Animated.View)`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 2px;
`;

const Checkmark = styled(Animated.View)`
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 10000px;
`;

const Label = styled.Text`
  margin-left: 8px;
  color: #6c757d;
`;

const Checkbox = ({ value, onPress, label, index }) => {
  const isChecked = useSharedValue(value);

  const handlePress = () => {
    isChecked.value = !isChecked.value;
    onPress();
  };

  const progress = useDerivedValue(() =>
    withSpring(isChecked.value ? 1 : 0, { damping: 20, stiffness: 225 })
  );

  const animatedBoxStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], ['transparent', '#82cab2']),
    borderColor: interpolateColor(progress.value, [0, 1], ['#ccc', '#82cab2']),
  }));

  const animatedCheckmarkStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ scale: withSpring(isChecked.value ? 1 : 0) }],
  }));

  return (
    <Pressable
      onPress={handlePress}
      accessible
      accessibilityLabel={label}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: isChecked.value }}
      accessibilityHint="Tap to toggle the checkbox"
      testID={`checkbox-${label}-${index}`}
    >
      <CheckboxContainer>
      <Box style={animatedBoxStyle}>
        <Checkmark style={animatedCheckmarkStyle} />
      </Box>
      <Label>{label}</Label>
      </CheckboxContainer>
    </Pressable>
  );
};

export default function CheckboxInput({ index = 0 }) {
  return (
      <Checkbox
        value={false}
        onPress={() => console.log('Checkbox toggled')}
        label="Checkbox"
        index={index}
      />
  );
}
