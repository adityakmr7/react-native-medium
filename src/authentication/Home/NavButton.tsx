import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../components";

interface NavButtonProps {
  label: string;
  onPress: () => void;
}

const NavButton = ({ label, onPress }: NavButtonProps) => {
  return (
    <Box padding="m">
      <RectButton {...onPress}>
        <Text fontWeight="bold" variant="button">
          {label}
        </Text>
      </RectButton>
    </Box>
  );
};

export default NavButton;
