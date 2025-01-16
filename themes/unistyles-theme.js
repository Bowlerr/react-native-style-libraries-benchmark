import { StyleSheet } from "react-native-unistyles";

const palette = {
  red: "red",
  black: "#000",
  white: "#fff",
  gray: "#888",
  blue: "blue",
  textPrimary: "#333",
  textSecondary: "#666",
  background: "#f5f5f5",
};
const darkTheme = {
  colors: {
    red: palette.red,
    black: palette.black,
    white: palette.white,
    gray: palette.gray,
    blue: palette.blue,
    primary: "#90caf9", // Softer blue for dark mode
    textPrimary: palette.white, // White text for dark backgrounds
    textSecondary: "#c7c7c7", // Softer gray for secondary text
    background: "#121212", // Very dark background
    text: palette.white,
  },
  spacing: {
    xs: 5,
    s: 10,
    m: 16,
    l: 24,
    xl: 40,
  },
};

const theme = {
  colors: {
    red: palette.red,
    black: palette.black,
    white: palette.white,
    gray: palette.gray,
    blue: palette.blue,
    primary: palette.blue,
    textPrimary: palette.textPrimary,
    textSecondary: palette.textSecondary,
    background: palette.background,
    text: palette.black,
  },
  spacing: {
    xs: 5,
    s: 10,
    m: 16,
    l: 24,
    xl: 40,
  },
};

StyleSheet.configure({
  themes: {
    light: theme,
    dark: darkTheme,
  },
  settings: {
    initialTheme: "dark", // Sets the default theme to light mode
  },
});
