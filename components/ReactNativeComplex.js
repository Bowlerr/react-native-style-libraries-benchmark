import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
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
          <View
            style={[
              styles.complexCard,
              { backgroundColor: i % 2 === 0 ? "blue" : "gray" },
            ]}
          >
            <Image
              source={{
                uri: `https://api.images.cat/300/300/${i}`,
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Item {i} Title</Text>
              <Text style={styles.cardDescription}>
                This is a more complex card to test render time. It includes an
                image, styled text, and multiple nested elements. Each card is
                rendered individually and dynamically.
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.footerText}>Footer Content {i}</Text>
              </View>
            </View>
          </View>
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
    margin: 10,
  },
  complexCard: {
    width: 140,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#ddd",
    marginBottom: 10,
  },
  cardFooter: {
    marginTop: 5,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#fff",
  },
});

export default Demo;
