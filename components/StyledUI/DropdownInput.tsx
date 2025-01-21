import React from 'react';
import { Modal, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import styled from 'styled-components/native';
import { FlatList, Pressable } from 'react-native-gesture-handler';

const Container = styled.View`
  border: 1px solid #6c757d;
  border-radius: 10px;
  background-color:  #ffffff;
`;

const Trigger = styled.Pressable`
  padding: 12px;
  border-radius: 3px;
`;

const Overlay = styled(Animated.View)`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const Dropdown = styled(Animated.View)`
  width: 100%;
  background-color: #ffffff;
  padding: 8px;
  elevation: 5;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Header = styled.Text`
  font-weight: bold;
  padding: 8px;
  color: #6c757d;
`;

const Item = styled.View`
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
`;

const Label = styled.Text`
  color: #6c757d;
`;

const DropdownInput = ({ index = 0 }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('Select Option');
  const dropdownTranslateY = useSharedValue(300);

  const options = [
    { label: 'UX Research', value: 'ux' },
    { label: 'Web Development', value: 'web' },
    { label: 'Cross Platform Development', value: 'cross' },
    { label: 'Backend', value: 'backend' },
  ];

  const openDropdown = () => {
    setIsOpen(true);
    dropdownTranslateY.value = withSpring(0, { damping: 30, stiffness: 150 });
  };

  const closeDropdown = () => {
    dropdownTranslateY.value = withSpring(300, { damping: 20, stiffness: 150 }, () => {
      runOnJS(setIsOpen)(false);
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(dropdownTranslateY.value, [0, 300], [1, 0]),
    transform: [{ translateY: dropdownTranslateY.value }],
  }));

  return (
    <Container>
      <Trigger onPress={openDropdown}>
        <Text>{selectedValue}</Text>
      </Trigger>
      <Modal transparent visible={isOpen} animationType="none" onRequestClose={closeDropdown}>
        <Pressable onPress={closeDropdown}>
          <Overlay style={animatedStyle}>
            <Dropdown style={animatedStyle}>
              <Header>Dropdown Menu</Header>
              <FlatList
                data={options}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      setSelectedValue(item.label);
                      closeDropdown();
                    }}
                  >
                    <Item>
                      <Label>{item.label}</Label>
                    </Item>
                  </Pressable>
                )}
              />
            </Dropdown>
          </Overlay>
        </Pressable>
      </Modal>
    </Container>
  );
};

export default DropdownInput;
