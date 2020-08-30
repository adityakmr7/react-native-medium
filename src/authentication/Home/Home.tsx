import React from "react";
import { Platform } from "react-native";
import { Box, Title } from "../../components";
import HomeContent from "./native/HomeContent";
import NavButton from "./NavButton";
interface HomeProps {}

const Home = ({}: HomeProps) => {
  if (Platform.OS !== "web") {
    return <HomeContent />;
  } else {
    return (
      <Box backgroundColor="white" flex={1}>
        <Box height={60} borderBottomWidth={1} borderColor="white">
          <Box
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            style={{ marginHorizontal: 200, height: "100%" }}
          >
            <Box>
              <Title label="Medium" />
            </Box>
            <Box flexDirection="row">
              <NavButton label={"SubScribe"} onPress={() => {}} />
              <NavButton label={"Write"} onPress={() => {}} />
              <NavButton label={"SignIn"} onPress={() => {}} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Home;
