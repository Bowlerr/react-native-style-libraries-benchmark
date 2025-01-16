import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { COUNT } from "../utils";

const Demo = () => {
  return (
    <View style={styles.container}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          style={styles.touchable}
        >
          <View style={[styles.box(i % 2 !== 0)]}>
            <Text style={styles.title}>Item {i}</Text>
            <Text style={styles.body}>This is static content</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  touchable: {
    margin: 5,
  },
  box: (isOdd) => ({
    backgroundColor: isOdd ? "gray" : "blue",
    borderColor: theme.colors.red,
    padding: theme.spacing.s,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  }),
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
}));

export default Demo;
