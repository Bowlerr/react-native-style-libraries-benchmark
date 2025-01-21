import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";
import { COUNT } from "../utils";

const UIDemo = () => {
  return (
    <View style={styles.container}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          style={styles.touchable}
        >
          <View
            style={[
              styles.styledView,
              i % 2 === 0 ? styles.blueBackground : styles.grayBackground,
            ]}
            center
          >
            <Text text40BO white>
              Item {i}
            </Text>
            <Text text70 white>
              This is static content
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  touchable: {
    margin: 5,
  },
  styledView: {
    borderColor: "red",
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
  },
  blueBackground: {
    backgroundColor: "blue",
  },
  grayBackground: {
    backgroundColor: "gray",
  },
});

export default UIDemo;
