import React from 'react';
import styled from 'styled-components/native';


const TextArea = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 4,
  placeholder: 'Once upon a time...',
})`
  height: 100px;
  border: 1px solid #007bff;
  border-radius: 20px;
  padding: 10px;
`;

const TextAreaInput: React.FC<{ index: number }> = ({index = 0}) => {
  return (
      <TextArea  testID={`text-area-${index}`} accessibilityLabel="Text area input" />
  );
};

export default TextAreaInput;
