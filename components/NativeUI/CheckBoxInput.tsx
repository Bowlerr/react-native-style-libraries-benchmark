import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10000,
  },
  label: {
    marginLeft: 10, 
    color: '#6c757d', 
  },
});

const Checkbox = ({ value, onPress, label, index }) => {
  const isChecked = useSharedValue(value);

  const handlePress = () => {
    isChecked.value = !isChecked.value;
    onPress();
  };

  const progress = useDerivedValue(() =>
    withSpring(isChecked.value ? 1 : 0, { damping: 20, stiffness: 225 })
  );

  const animatedBoxStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['transparent', '#82cab2'] // Transparent when not selected, coloured when selected
    );

    const borderColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#ccc', '#82cab2'] // Grey outline when not selected, coloured when selected
    );

    return {
      backgroundColor,
      borderColor,
    };
  });

  const animatedCheckmarkStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ scale: withSpring(isChecked.value ? 1 : 0) }],
  }));

  return (
    <Pressable
      onPress={handlePress}
      style={styles.checkboxContainer}
      accessible={true}
      accessibilityLabel={label}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: isChecked.value }}
      accessibilityHint="Tap to toggle the checkbox"
      testID={`checkbox-${label}-${index}`}
    >
      <Animated.View style={[styles.box, animatedBoxStyle]}>
        <Animated.View style={[styles.checkmark, animatedCheckmarkStyle]} />
      </Animated.View>
      <Text style={styles.label}>{label}</Text>
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
