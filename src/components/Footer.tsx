import { AntDesign as Icon } from "@expo/vector-icons";
import React from "react";
import NavButton from "../authentication/Home/components/NavButton";
import { Box, Text } from "./theme";
interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <Box marginTop="xxxl" backgroundColor="black" height={300}>
      <Box
        paddingTop="xl"
        style={{ marginHorizontal: 200 }}
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize={50} variant="footer">
            M
          </Text>
          <Box flexDirection="row">
            <NavButton
              variant="footer"
              label={"Get Started"}
              onPress={() => {}}
            />
            <NavButton
              variant="footer"
              label={"Subscribe"}
              onPress={() => {}}
            />
            <NavButton
              variant="footer"
              label={"Have an account? Sign In"}
              onPress={() => {}}
            />
          </Box>
          <Box flexDirection="row">
            <NavButton
              variant="footer"
              label={"About Medium"}
              onPress={() => {}}
            />
            <NavButton variant="footer" label={"Write"} onPress={() => {}} />
            <NavButton variant="footer" label={"Gift"} onPress={() => {}} />
            <NavButton variant="footer" label={"Help"} onPress={() => {}} />
            <NavButton
              variant="footer"
              label={"Press Contacts"}
              onPress={() => {}}
            />
            <NavButton variant="footer" label={"Careers"} onPress={() => {}} />
            <NavButton variant="footer" label={"Legal"} onPress={() => {}} />
          </Box>
          <Text variant="subTextFooter">
            <Icon name="copyright" size={15} color="white" /> 2020 A Medium
            Corporation
          </Text>
        </Box>
        <Box>
          <Text variant="footer">Get the Medium app</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
