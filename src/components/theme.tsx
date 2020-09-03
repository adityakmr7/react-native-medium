import { createBox, createText, createTheme } from "@shopify/restyle";

export const palette = {};

export const theme = createTheme({
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
    xxxl: 80,
  },
  borderRadii: {
    s: 2,
    m: 16,
  },
  colors: {
    white: "#FFF",
    lightBlack: "#292929",
    lightGray: "#78909C",
    greenish: "#029E74",
    lightGreen: "#f0fff9",
    gray: "#37474F",
  },
  breakpoints: {},
  textVariants: {
    webTitle: {
      fontSize: 80,
      fontWeight: "bold",
      colors: "lightBlack",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
    subTitleA: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    },
    subTextFooter: {
      fontSize: 15,
      color: "lightGray",
    },
    button: {
      fontSize: 15,
      fontWeight: 400,
      color: "gray",
    },

    link: {
      fontSize: 15,
      color: "greenish",
    },
  },
  cardVariants: {},
});

type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
