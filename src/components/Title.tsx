import React from "react";
import { Text, View } from "react-native";

interface TitleProps {
  label: string;
}

const Title = ({ label }: TitleProps) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{label}</Text>
    </View>
  );
};

export default Title;
