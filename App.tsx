import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppStack from "./src/authentication";

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
