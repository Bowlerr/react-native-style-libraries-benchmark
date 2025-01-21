import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create((theme) => ({
  track: {
    alignItems: 'flex-start',
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.background,
    borderRadius: 1000,
  },
  thumb: {
    height: '100%',
    aspectRatio: 1,
    backgroundColor: theme.colors.white,
    borderRadius: 1000,
  },
  switchContainer: {
    alignItems: 'flex-start',
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.background,
    borderRadius: 1000,
    width: 70,
    height: 40,
    transform: [{ scale: 0.8 }],
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.secondary,
  },
}));

const Switch = ({
  value,
  onPress,
  style,
  label = 'Toggle Switch', // Accessibility label
  testID = 'switch'
}) => {
  const isOn = useSharedValue(value);
  const handlePress = () => {
    isOn.value = !isOn.value;
    onPress();
  };

  const progress = useDerivedValue(() =>
    withSpring(isOn.value ? 0 : 1, { damping: 20, stiffness: 225 })
  );
  const height = useSharedValue(0);
  const width = useSharedValue(0);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      ['#fa7f7c', '#82cab2'] // Dynamic background colour based on state
    );

    return {
      backgroundColor: color,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      progress.value,
      [0, 1],
      [0, width.value - height.value]
    );

    return {
      transform: [{ translateX: moveValue }],
    };
  });

  return (
    <Pressable
      onPress={handlePress}
      accessible
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityState={{ checked: isOn.value }}
      testID={testID}
    >
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
          width.value = e.nativeEvent.layout.width;
        }}
        style={[style ?? styles.track, trackAnimatedStyle]}
      >
        <Animated.View style={[styles.thumb, thumbAnimatedStyle]} />
      </Animated.View>
    </Pressable>
  );
};

export default function SwitchInputAni({ index = 0 }) {
  return (
    <View style={styles.container}>
      <Switch
        value={index % 2 === 0}
        onPress={() => console.log('Switch toggled')}
        style={styles.switchContainer}
        label="Example Toggle Switch"
        testID={`switch-${index}`}
      />
      <Text style={styles.label}>Switch</Text>
    </View>
  );
}
