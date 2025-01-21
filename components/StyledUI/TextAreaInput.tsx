import React from 'react';
import styled from 'styled-components/native';


const TextArea = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 4,
  placeholder: 'Enter text here...',
})`
  width: 100%;
  height: 100px;
  border: 1px solid #007bff;
  border-radius: 5px;
  padding: 10px;
  text-align-vertical: top;
  font-size: 16px;
  color: #333333;
`;

const TextAreaInput: React.FC<{ label?: string }> = ({ label = 'Text Area' }) => {
  return (
      <TextArea />
  );
};

export default TextAreaInput;
