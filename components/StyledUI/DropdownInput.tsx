import React, { useState } from 'react';
import { Modal, Text } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  cancelAnimation,
} from 'react-native-reanimated';
import styled from 'styled-components/native';
import { FlatList, Pressable } from 'react-native-gesture-handler';

const Container = styled.View`
  border: 1px solid #6c757d;
  border-radius: 10px;
  background-color:  #ffffff;
  align-items: center;
`;

const Trigger = styled.View`
  padding: 16px;
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
  padding: 10px;
  elevation: 5;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Header = styled.Text`
  font-weight: bold;
  padding: 10px;
  color: #6c757d;
`;

const Item = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
`;

const Label = styled.Text`
  color: #6c757d;
`;

const DropdownInput = ({ index = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Select Option');
  const dropdownTranslateY = useSharedValue(300);

  const options = [
    { label: 'UX Research', value: 'ux' },
    { label: 'Web Development', value: 'web' },
    { label: 'Cross Platform Development', value: 'cross' },
    { label: 'Backend', value: 'backend' },
  ];

  const openDropdown = () => {
    setIsOpen(true);
    cancelAnimation(dropdownTranslateY)
    dropdownTranslateY.value = withSpring(0, { damping: 30, stiffness: 150 });
  };

  const closeDropdown = () => {
    cancelAnimation(dropdownTranslateY)
    dropdownTranslateY.value = withSpring(300, { damping: 20, stiffness: 150 }, () => {
      runOnJS(setIsOpen)(false);
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(dropdownTranslateY.value, [0, 300], [1, 0]),
    transform: [{ translateY: dropdownTranslateY.value }],
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    opacity: interpolate(dropdownTranslateY.value, [0, 200], [1, 0]),
  }));

  return (
    <Container>
       <Pressable
          onPress={openDropdown}
          accessibilityLabel="Select an option"
          accessibilityRole="menu"
          accessibilityHint="Double tap to open or close the dropdown menu"
          accessibilityState={{ expanded: isOpen }}
          testID={`select-button-open-${index}`}
      >
      <Trigger>
        <Text>{selectedValue}</Text>
      </Trigger>
      </Pressable>
      <Modal
              transparent
              visible={isOpen}
              animationType="none"
              onRequestClose={closeDropdown}
              accessibilityViewIsModal={true} 
              accessible={true}
            >
              <Pressable
                onPress={closeDropdown}
                accessibilityLabel="Close dropdown"
                accessibilityRole="button"
                accessibilityHint="Closes the dropdown menu"
              >
          <Overlay style={backgroundStyle}>
            <Dropdown style={animatedStyle}>
              <Header accessibilityRole="header">Dropdown Menu</Header>
              <FlatList
                data={options}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      setSelectedValue(item.label);
                      closeDropdown();
                    }}
                    accessibilityLabel={`Select ${item.label}`}
                    accessibilityRole="menuitem"
                    accessibilityHint={`Selects ${item.label}`}
                    testID={`select-menu-button-${item.label}-${index}`}
                  >
                    <Item>
                      <Label>{item.label}</Label>
                    </Item>
                  </Pressable>
                )}
                accessibilityRole="menu"
              />
            </Dropdown>
          </Overlay>
        </Pressable>
      </Modal>
    </Container>
  );
};


export default DropdownInput;
