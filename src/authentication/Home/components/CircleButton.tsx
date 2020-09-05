import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { Box, Theme } from "../../../components";

interface CircleButtonProps {
  icon: string;
  color?: keyof Theme["colors"];
}

const CircleButton = ({ icon, color }: CircleButtonProps) => {
  return (
    <Box style={{ padding: 4, elevation: 5 }}>
      <Box
        style={{
          borderRadius: 50,
          padding: 2,
        }}
        backgroundColor={color}
      >
        <Icon name={icon} color="white" size={20} />
      </Box>
    </Box>
  );
};

export default CircleButton;
