import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";

interface RoundedButtonProps {
  label: string;
  icon: string;
  onPress: () => void;
}

const RoundedButton = ({ label, icon, onPress }: RoundedButtonProps) => {
  return (
    <RectButton
      {...onPress}
      style={{
        backgroundColor: "#CFD8DC",
        borderRadius: 50,
      }}
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box style={{ padding: 5 }}>
          <Box
            style={{
              borderRadius: 50,
              paddingHorizontal: 12,
            }}
            backgroundColor="lightBlack"
          >
            <Text color="white" fontSize={30}>
              {icon}
            </Text>
          </Box>
        </Box>

        <Box paddingHorizontal="s">
          <Text variant="button">{label}</Text>
        </Box>
      </Box>
    </RectButton>
  );
};

export default RoundedButton;
