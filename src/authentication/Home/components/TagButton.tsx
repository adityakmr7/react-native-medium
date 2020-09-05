import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
import CircleButton from "./CircleButton";

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
        <CircleButton {...{ icon }} color="lightBlack" />
        <Box paddingHorizontal="s">
          <Text variant="button">{label}</Text>
        </Box>
      </Box>
    </RectButton>
  );
};

export default RoundedButton;
