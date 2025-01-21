import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, PaperProvider, Text } from "react-native-paper";
import { COUNT } from "../utils";

const Demo = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => alert(`Item ${i} clicked!`)}
            style={styles.touchable}
            rippleColor="rgba(0, 0, 0, .2)"
          >
            <Card
              style={[
                styles.card,
                { backgroundColor: i % 2 === 0 ? "blue" : "gray" },
              ]}
            >
              <Card.Cover
                source={{
                  uri: `https://api.images.cat/300/300/${i}`,
                }}
                style={styles.cardImage}
              />
              <Card.Title
                title={`Item ${i} Title`}
                titleVariant="titleLarge"
                titleStyle={styles.cardTitle}
              />
              <Card.Content>
                <Text variant="bodyMedium" style={styles.cardDescription}>
                  This is a more complex card to test render time. It includes
                  an image, styled text, and multiple nested elements. Each card
                  is rendered individually and dynamically.
                </Text>
                <Text style={styles.footerText}>Footer Content {i}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  touchable: {
    margin: 10,
  },
  card: {
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
    height: 100,
    borderRadius: 0,
    padding: 0,
  },
  cardTitle: {
    color: "white",
    marginBottom: 5,
  },
  cardDescription: {
    color: "#ddd",
    marginBottom: 10,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  },
  footerText: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 12,
    color: "#fff",
  },
});

export default Demo;
