import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet, ScopedTheme } from "react-native-unistyles";
import { COUNT } from "../utils";

const Demo = () => {
  return (
    <View style={styles.container}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <ScopedTheme key={i} name={i % 2 === 0 ? "dark" : "light"}>
          <TouchableOpacity
            onPress={() => alert(`Item ${i} clicked!`)}
            style={styles.touchable}
          >
            <View style={styles.complexCard}>
              <Image
                source={{
                  uri: `https://api.images.cat/300/300/${i}`,
                }}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Item {i} Title</Text>
                <Text style={styles.cardDescription}>
                  This is a more complex card to test render time. It includes
                  an image, styled text, and multiple nested elements. Each card
                  is rendered individually and dynamically.
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.footerText}>Footer Content {i}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScopedTheme>
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
    margin: theme.spacing.s,
  },
  complexCard: {
    width: 140,
    backgroundColor: theme.colors.background,
    borderRadius: theme.spacing.xs,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: theme.spacing.s,
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  cardContent: {
    padding: theme.spacing.s,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
  },
  cardFooter: {
    marginTop: theme.spacing.xs,
    paddingVertical: theme.spacing.xs,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: theme.colors.text,
  },
}));

export default Demo;
