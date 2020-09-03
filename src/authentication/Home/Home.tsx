import React from "react";
import { Platform } from "react-native";
import { Box, Text, Title } from "../../components";
import NavButton from "./components/NavButton";
import RoundedButton from "./components/RoundedButton";
import StartButton from "./components/StartButton";
import HomeContent from "./native/HomeContent";
interface HomeProps {}
const tags = [
  { id: 1, title: "Future" },
  { id: 2, title: "OneZero" },
  { id: 3, title: "Technology" },
  { id: 4, title: "Elemental" },
  { id: 5, title: "Health" },
  { id: 6, title: "Science" },
  { id: 7, title: "Gen" },
  { id: 8, title: "Business" },
];
const tags2 = [
  { id: 1, title: "Marker" },
  { id: 2, title: "Work" },
  { id: 3, title: "Culture" },
  { id: 4, title: "Zora" },
  { id: 5, title: "Tendly" },
  { id: 6, title: "Food" },
  { id: 7, title: "Heated" },
  { id: 8, title: "Programming" },
];

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
              <Box paddingTop="s">
                <StartButton
                  label={"Get Started"}
                  onPress={() => {}}
                  width={150}
                  height={40}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop="xxxl">
          <Box justifyContent="center" alignItems="center">
            <Text textAlign="center" variant="webTitle">
              Dive deeper on topics that
            </Text>
            <Text variant="webTitle">matter to you.</Text>
            <Text variant="button">
              Select what you're into. We'll help you find great things to read.
            </Text>
          </Box>
        </Box>
        <Box
          flexDirection="row"
          marginTop="xxl"
          marginBottom="s"
          justifyContent="center"
          alignItems="center"
        >
          {tags.map((item, _) => {
            return (
              <Box paddingHorizontal="s">
                <RoundedButton
                  key={item.id}
                  label={item.title}
                  icon="#"
                  onPress={() => {}}
                />
              </Box>
            );
          })}
        </Box>
        <Box flexDirection="row" justifyContent="center" alignItems="center">
          {tags2.map((item, _) => {
            return (
              <Box paddingHorizontal="s">
                <RoundedButton
                  key={item.id}
                  label={item.title}
                  icon="#"
                  onPress={() => {}}
                />
              </Box>
            );
          })}
        </Box>
        <Box alignItems="center" marginTop="xl">
          <StartButton
            onPress={() => {}}
            label="Getting Stated"
            width={300}
            height={60}
          />
          <Box paddingVertical="s">
            <Text>
              Already have an account. <Text variant="link">Sign in.</Text>
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Home;
