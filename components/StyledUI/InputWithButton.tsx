import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  gap: 16px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #007bff;
  padding: 10px;
`;

const Button = styled.Button``;

const InputWithButton: React.FC<{ i?: number }> = ({ i = 0 }) => {
  const handlePress = () => {
    Alert.alert(`Pressed ${i}`);
  };

  return (
    <Container>
      <Input placeholder="Enter text here..." testID={`text-input-${i}`} />
      <Button title="Submit" onPress={handlePress} />
    </Container>
  );
};

export default InputWithButton;
