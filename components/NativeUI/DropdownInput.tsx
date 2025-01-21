import React from 'react';
import {
  View,
  Text,
  Modal,
  AccessibilityInfo,
  findNodeHandle,
  StyleSheet,
} from 'react-native';
import { FlatList, Pressable } from 'react-native-gesture-handler';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';

const DropdownInput = ({ index = 0 }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('Select Option');
  const dropdownTranslateY = useSharedValue(300); // Start below the viewport
  const dropdownRef = React.useRef<View>(null);

  const options = [
    { label: 'UX Research', value: 'ux' },
    { label: 'Web Development', value: 'web' },
    { label: 'Cross Platform Development', value: 'cross' },
    { label: 'Backend', value: 'backend' },
  ];

  const openDropdown = () => {
    setIsOpen(true);
    dropdownTranslateY.value = withSpring(0, { damping: 30, stiffness: 150 }, () => {
      runOnJS(accessibilityFocusOnMenu)();
    });
  };

  const accessibilityFocusOnMenu = () => {
    const node = findNodeHandle(dropdownRef.current);
    if (node) AccessibilityInfo.setAccessibilityFocus(node);
  };

  const closeDropdown = () => {
    dropdownTranslateY.value = withSpring(300, { damping: 20, stiffness: 150 }, () => {
      runOnJS(setIsOpen)(false); // Close the dropdown after animation completes
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(dropdownTranslateY.value, [0, 300], [1, 0]),
    transform: [{ translateY: dropdownTranslateY.value }],
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    opacity: interpolate(dropdownTranslateY.value, [0, 300], [1, 0]),
  }));

  return (
    <View style={styles.container}>
      {/* Dropdown Trigger */}
      <Pressable
        onPress={openDropdown}
        accessibilityLabel="Select an option"
        accessibilityRole="menu"
        accessibilityHint="Double tap to open or close the dropdown menu"
        accessibilityState={{ expanded: isOpen }}
        testID={`select-button-open-${index}`}
      >
        <View style={styles.trigger}>
          <Text>{selectedValue}</Text>
        </View>
      </Pressable>

      {/* Dropdown Modal */}
      <Modal
        transparent
        visible={isOpen}
        animationType="none"
        onRequestClose={closeDropdown}
        accessibilityViewIsModal={true} // Indicates the modal contains focused content
        accessible={true}
      >
        <Pressable
          onPress={closeDropdown}
          accessibilityLabel="Close dropdown"
          accessibilityRole="button"
          accessibilityHint="Closes the dropdown menu"
        >
          <Animated.View style={[styles.overlay, backgroundStyle]}>
            <Animated.View style={[styles.dropdown, animatedStyle]} ref={dropdownRef}>
              <Text style={styles.header} accessibilityRole="header">
                Dropdown Menu
              </Text>
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
                    <View style={styles.item}>
                      <Text style={styles.label}>{item.label}</Text>
                    </View>
                  </Pressable>
                )}
                accessibilityRole="menu"
              />
            </Animated.View>
          </Animated.View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#6c757d', 
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff', // Background colour

  },
  trigger: {
    padding: 12,
    borderRadius: 3,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  label: {
    color: '#6c757d', // Secondary colour
  },
  header: {
    fontWeight: 'bold',
    padding: 8, // Equivalent to `theme.spacing.s`
    color: '#6c757d', // Secondary colour
  },
  dropdown: {
    width: '100%',
    backgroundColor: '#ffffff', // Background colour
    padding: 8, // Equivalent to `theme.spacing.s`
    elevation: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  item: {
    padding: 8, // Equivalent to `theme.spacing.s`
    borderBottomWidth: 1,
    borderBottomColor: '#000000', // Black colour
  },
});

export default DropdownInput;
