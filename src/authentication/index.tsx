import { RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import Home from "./Home";

export type StackProps = {
  Home: undefined;
};

export type StackNavProps<T extends keyof StackProps> = {
  navigation: StackNavigationProp<StackProps, T>;
  route: RouteProp<StackProps, T>;
};

const Stack = createStackNavigator<StackProps>();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
