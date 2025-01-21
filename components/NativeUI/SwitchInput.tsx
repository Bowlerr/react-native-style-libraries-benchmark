import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

interface SwitchInputProps {
  index?: number;
}

const SwitchInput: React.FC<SwitchInputProps> = ({ index = 0 }) => {
  const [isEnabled, setIsEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        accessibilityLabel={`Switch ${index}`}
        accessibilityRole="switch"
        trackColor={{ false: '#000000', true: '#6c757d' }} // Replace with your desired colours
        thumbColor="#cccccc" // Replace with your desired thumb colour
        ios_backgroundColor="#000000" // Replace with your desired iOS background colour
        style={styles.switch}
      />
      <Text style={styles.label}>Switch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16, 
  },
  switch: {
    transform: [{ scale: 0.8 }],
  },
  label: {
    color: '#6c757d', 
  },
});

export default SwitchInput;
