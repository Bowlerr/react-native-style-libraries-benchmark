
// TextAreaInput.tsx
import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const TextAreaInput = ({index = 0}) => (
  <TextInput
    testID={`text-area-${index}`}
    style={styles.textArea}
    placeholder="Once upon a time..."
    multiline
    numberOfLines={4}
    accessibilityLabel="Text area input"
  />
);

const styles = StyleSheet.create((theme) => ({
  textArea: {
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    height: 100,
  },
}));

export default TextAreaInput;