import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, Card, Image } from "react-native-ui-lib";
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
          <Card
            style={[
              styles.card,
              { backgroundColor: i % 2 === 0 ? "blue" : "gray" },
            ]}
            elevation={5}
            borderRadius={8}
          >
            <Card.Image
              source={{ uri: `https://api.images.cat/300/300/${i}` }}
              style={styles.cardImage}
            />
            <View padding-10>
              <Text white text70BO marginB-5>
                Item {i} Title
              </Text>
              <Text white text80 marginB-10>
                This is a more complex card to test render time. It includes an
                image, styled text, and multiple nested elements. Each card is
                rendered individually and dynamically.
              </Text>
              <View style={styles.cardFooter}>
                <Text white text90>
                  Footer Content {i}
                </Text>
              </View>
            </View>
          </Card>
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
    width: "100%",
  },
  cardFooter: {
    marginTop: 5,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    alignItems: "center",
  },
});

export default Demo;
