import { createBox, createText, createTheme } from "@shopify/restyle";

export const palette = {};

export const theme = createTheme({
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  colors: {
    white: "#FFF",
    black: "#111",
    lightGray: "#78909C",
    greenish: "#029E74",
    lightGreen: "#f0fff9",
  },
  breakpoints: {},
  textVariants: {
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
