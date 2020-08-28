import { FontAwesome as Icon } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface IconButtonProps {
  icon: string;
  label: string;
  onPress: () => void;
}

const IconButton = ({ icon, label, onPress }: IconButtonProps) => {
  return (
    <RectButton
      style={{
        backgroundColor: "white",
        height: 40,
        elevation: 1,
        borderRadius: 5,
      }}
      {...onPress}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ paddingHorizontal: 20, paddingTop: 5 }}>
          <Icon name={icon} size={30} color="black" />
        </View>
        <View>
          <Text style={{ fontSize: 15 }}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
};

export default IconButton;
