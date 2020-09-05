import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";

interface StartButtonProps {
  onPress: () => void;
  label: string;
  width: number;
  height: number;
}

const StartButton = ({ onPress, label, width, height }: StartButtonProps) => {
  return (
    <Box
      justifyContent="center"
      borderRadius="s"
      alignItems="center"
      backgroundColor="greenish"
      {...{ width, height }}
    >
      <RectButton {...onPress}>
        <Text color="white" variant="button">
          {label}
        </Text>
      </RectButton>
    </Box>
  );
};
StartButton.defaultProps = {
  label: "Get Started",
  width: 300,
  height: 60,
};
export default StartButton;
