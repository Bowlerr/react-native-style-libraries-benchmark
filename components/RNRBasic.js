import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Card, CardHeader, CardTitle, CardContent } from "~/reuseable/ui/card";
import { Text } from "~/reuseable/ui/text";
import { COUNT } from "../utils";

const NativeReusable = () => {
  return (
    <View style={styles.container}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          style={styles.touchable}
        >
          <Card
            style={[
              i % 2 === 0 ? styles.blueBackground : styles.grayBackground,
            ]}
          >
            <CardHeader>
              <CardTitle>Item {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <Text className="text-sm text-white leading-5">
                This is static content
              </Text>
            </CardContent>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  touchable: {
    margin: 5,
  },
  blueBackground: {
    backgroundColor: "blue",
  },
  grayBackground: {
    backgroundColor: "gray",
  },
});

export default NativeReusable;
