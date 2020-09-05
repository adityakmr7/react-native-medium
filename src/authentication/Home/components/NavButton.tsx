import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text, Theme } from "../../../components";

interface NavButtonProps {
  label: string;
  onPress: () => void;
  variant: keyof Theme["textVariants"];
}

const NavButton = ({ label, onPress, variant }: NavButtonProps) => {
  return (
    <Box padding="m">
      <RectButton {...onPress}>
        <Text variant={variant}>{label}</Text>
      </RectButton>
    </Box>
  );
};

export default NavButton;
