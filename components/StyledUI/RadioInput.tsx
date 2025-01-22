import React from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

const Container = styled.View`
  gap: 16px;
`;

const Heading = styled.Text`
  margin-bottom: 5px;
  color: #000000;
`;

const RadioContainer = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-left: 16px;
`;

const RadioCircle = styled(Animated.View)`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #007bff;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  color: #000000;
`;

interface RadioGroupItemWithLabelProps {
  label: string;
  onPress: () => void;
  sharedValue: Animated.SharedValue<number>;
  index: number;
}

const RadioGroupItemWithLabel: React.FC<RadioGroupItemWithLabelProps> = ({
  label,
  onPress,
  sharedValue,
  index,
}) => {
  const scale = useSharedValue(1);

  const progress = useDerivedValue(() => {
    const isSelected = sharedValue.value === index;
    return withTiming(isSelected ? 1 : 0, { duration: 100 });
  });

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], ['rgba(200, 200, 200, 1)', '#4287f5']),
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () =>
    (scale.value = withSpring(0.95, { damping: 15, stiffness: 200 }));

  const handlePressOut = () =>
    (scale.value = withSpring(1, { damping: 15, stiffness: 200 }));

  return (
    <RadioContainer
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityLabel={label}
      accessibilityRole="radio"
      accessibilityState={{ checked: sharedValue.value === index }}
    >
      <RadioCircle style={animatedStyle} />
      <Label>{label}</Label>
    </RadioContainer>
  );
};

const RadioInput: React.FC<{ index?: number }> = ({ index = 0 }) => {
  const options = [
    { value: `2${index}`, label: 'Monday' },
    { value: `3${index}`, label: 'Tuesday' },
    { value: `4${index}`, label: 'Wednesday' },
  ];

  const selectedIndex = useSharedValue(-1);

  const handleSelect = (index: number) => {
    selectedIndex.value = index;
  };

  return (
    <Container>
      <Heading>Which time slot works best for you?</Heading>
      {options.map((option, idx) => (
        <RadioGroupItemWithLabel
          key={option.value}
          label={option.label}
          onPress={() => handleSelect(idx)}
          sharedValue={selectedIndex}
          index={idx}
        />
      ))}
    </Container>
  );
};

export default RadioInput;
