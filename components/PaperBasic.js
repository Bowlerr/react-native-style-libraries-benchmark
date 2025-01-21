import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { COUNT } from "../utils";

const PaperDemo = () => {
  return (
    <View style={styles.container}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          style={styles.touchable}
          rippleColor="rgba(0, 0, 0, .2)"
        >
          <View
            style={[
              styles.styledView,
              i % 2 === 0 ? styles.blueBackground : styles.grayBackground,
            ]}
          >
            <Text style={styles.title}>Item {i}</Text>
            <Text style={styles.body}>This is static content</Text>
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
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    borderRadius: 8,
  },
  blueBackground: {
    backgroundColor: "blue",
  },
  grayBackground: {
    backgroundColor: "gray",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "white",
  },
});

export default PaperDemo;
