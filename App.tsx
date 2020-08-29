import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { StatusBar } from "react-native";
import AppStack from "./src/authentication";
import { theme } from "./src/components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
