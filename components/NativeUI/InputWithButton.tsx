import React from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

interface InputWithButtonProps {
  i?: number;
}

const InputWithButton: React.FC<InputWithButtonProps> = ({ i = 0 }) => {
  const handlePress = () => {
    Alert.alert(`Pressed ${i}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        testID={`text-input-${i}`}
        placeholder="Enter text here..."
        accessibilityLabel="Input field"
      />
      <Button title="Submit" onPress={handlePress} accessibilityLabel="Submit button" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 16, // Equivalent to theme.spacing.m
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#007bff', // Primary colour
    borderWidth: 1,
    padding: 10,
  },
});

export default InputWithButton;
