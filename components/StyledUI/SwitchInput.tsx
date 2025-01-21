import React from 'react';
import { Switch } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const StyledSwitch = styled(Switch).attrs({
  trackColor: { false: '#000000', true: '#6c757d' },
  thumbColor: '#cccccc',
  ios_backgroundColor: '#000000',
})`
  transform: scale(0.8);
`;

const Label = styled.Text`
  color: #6c757d;
`;

const SwitchInput: React.FC<{ index?: number }> = ({ index = 0 }) => {
  const [isEnabled, setIsEnabled] = React.useState(true);

  return (
    <Container>
      <StyledSwitch
        value={isEnabled}
        onValueChange={setIsEnabled}
        accessibilityLabel={`Switch ${index}`}
      />
      <Label>Switch</Label>
    </Container>
  );
};

export default SwitchInput;
