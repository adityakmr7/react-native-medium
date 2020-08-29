import React from "react";
import { View } from "react-native";
import { Text } from "./theme";

interface TitleProps {
  label: string;
}

const Title = ({ label }: TitleProps) => {
  return (
    <View>
      <Text variant="title">{label}</Text>
    </View>
  );
};

export default Title;
