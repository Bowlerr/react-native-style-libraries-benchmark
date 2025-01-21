// RadioInput.tsx
import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
  withTiming,
  useDerivedValue,
  SharedValue,
} from 'react-native-reanimated';

interface RadioGroupItemWithLabelProps {
  label: string;
  onPress: () => void;
  sharedValue: SharedValue<number>;
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
    return withTiming(isSelected ? 1 : 0, {duration: 100})
  });

  // Animated style that reacts to sharedValue
  const animatedRadioStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: interpolateColor(
        progress.value, // Animate between unselected (0) and selected (1)
        [0, 1],
        ['rgba(200, 200, 200, 1)', 'rgba(66, 135, 245, 1)']
      )
    };
  });

 
  const handlePressIn = () =>
    (scale.value = withSpring(0.95, { damping: 15, stiffness: 200 }));

  const handlePressOut = () =>
    (scale.value = withSpring(1, { damping: 15, stiffness: 200 }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityLabel={label}
      accessibilityRole="radio"
      accessibilityState={{checked: sharedValue.value === index}}
      testID={`radio-button-${label}-${index}`}
    >
      <View style={styles.radioContainer}>
      <Animated.View style={[styles.radio, animatedRadioStyle]} />
      <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};

const RadioInput: React.FC<{ index?: number }> = ({ index = 0 }) => {
  const options =  [
      { value: `2${index}`, label: 'Monday' },
      { value: `3${index}`, label: 'Tuesday' },
      { value: `4${index}`, label: 'Wednesday' },
    ];

  // Shared value to track the selected index
  const selectedIndex = useSharedValue(-1);

  const handleSelect = (index: number) => {
    selectedIndex.value = index; // Update sharedValue when an option is selected
  };

  return (
    <View style={styles.radioGroupContainer}>
      <Text style={styles.heading}>Which time slot works best for you?</Text>
      {options.map((option, index) => (
        <RadioGroupItemWithLabel
          key={option.value}
          label={option.label}
          onPress={() => handleSelect(index)}
          sharedValue={selectedIndex}
          index={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  heading: {
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  radioGroupContainer: {
    gap: theme.spacing.m,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.m,
    paddingLeft: theme.spacing.m,
  },
  radio: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.text,
  },
}));

export default RadioInput;
