import React, { ReactNode } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../components";

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  onPress: () => void;
}

const IconButton = ({ icon, label, onPress }: IconButtonProps) => {
  return (
    <Box paddingVertical="s" paddingHorizontal="xxl">
      <RectButton
        style={{
          backgroundColor: "white",
          height: 40,
          elevation: 1,
          borderRadius: 5,
          justifyContent: "center",
        }}
        {...onPress}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 30,
          }}
        >
          <Box flex={1}>{icon}</Box>
          <Box flex={3}>
            <Text variant="button">{label}</Text>
          </Box>
        </View>
      </RectButton>
    </Box>
  );
};

export default IconButton;
