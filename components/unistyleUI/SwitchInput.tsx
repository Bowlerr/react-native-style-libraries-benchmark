// SwitchInput.tsx
import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';
import { StyleSheet, withUnistyles } from 'react-native-unistyles';

const UniSwitch = withUnistyles(Switch, (theme) => ({
  trackColor: {
    false: theme.colors.textPrimary,
    true: theme.colors.textSecondary,
  },
  thumbColor:theme.colors.primary,
  ios_backgroundColor: theme.colors.textPrimary,
  
    
}));

interface SwitchInputProps {
  index?: number;
}

const SwitchInput: React.FC<SwitchInputProps> = ({ index = 0 }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <UniSwitch
        value={isEnabled}
        onValueChange={setIsEnabled}
        accessibilityLabel={`Switch ${index}`}
        accessibilityRole="switch"
        style={styles.switch}
      />
      <Text style={styles.label}>
        Switch
      </Text>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.m,
  },
  switch: {
    transform: [{ scale:0.8 }],
  },
  label: {
    color: theme.colors.textSecondary,
  },
}));

export default SwitchInput;
