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
    <Box paddingVertical="s" paddingHorizontal="xl">
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box paddingHorizontal="m" paddingVertical="s">
            {icon}
          </Box>
          <Box>
            <Text variant="button">{label}</Text>
          </Box>
        </View>
      </RectButton>
    </Box>
  );
};

export default IconButton;
