import { StyleSheet } from "react-native-unistyles";


const palette = {
  green: "green",
  red: "red",
  black: "#000",
  white: "#fff",
  gray: "gray",
  darkGray: 'darkgray',
  lightGray: 'lightgray',
  blue: "blue",
  background: "#f5f5f5",
};
const darkTheme = {
  colors: {
    green: palette.green,
    red: palette.red,
    black: palette.black,
    white: palette.white,
    gray: palette.darkGray,
    blue: palette.blue,
    secondary: "#c7c7c7",
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
    green: palette.green,
    red: palette.red,
    black: palette.black,
    white: palette.white,
    gray: palette.lightGray,
    blue: palette.blue,
    primary: palette.blue,
    secondary: palette.gray,
    textPrimary: palette.black,
    textSecondary: palette.gray,
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


type AppThemes = {
  light: typeof theme;
  dark: typeof darkTheme
}

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
StyleSheet.configure({
  themes: {
    light: theme,
    dark: darkTheme,
  },
  settings: {
    initialTheme: "dark", // Sets the default theme to light mode
  },
});
