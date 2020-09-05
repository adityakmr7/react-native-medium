import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { TextStyle, ViewStyle } from "react-native";
export const palette = {};
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle };

export const theme = {
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
    black: "#000000",
    footerText: "#E6E6E6",
  },
  breakpoints: {},
  textVariants: {
    webTitle: {
      fontSize: 80,
      fontWeight: "bold",
      color: "lightBlack",
    },
    footer: {
      fontSize: 18,

      color: "white",
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
};

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
