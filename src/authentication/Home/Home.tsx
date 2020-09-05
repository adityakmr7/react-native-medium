import { useTheme } from "@react-navigation/native";
import React from "react";
import { Platform } from "react-native";
import { Box, Footer, Text, Title } from "../../components";
import CircleButton from "./components/CircleButton";
import NavButton from "./components/NavButton";
import StartButton from "./components/StartButton";
import TagButton from "./components/TagButton";
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

const info = [
  { id: 1, label: "World-class publications.", icon: "check" },
  { id: 2, label: "Undiscovered voices.", icon: "check" },
  { id: 3, label: "Topics you love.", icon: "check" },
  { id: 4, label: "All on Medium, all for you.", icon: "check" },
];

const Home = ({}: HomeProps) => {
  const theme = useTheme();
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
              <NavButton
                variant="button"
                label={"SubScribe"}
                onPress={() => {}}
              />
              <NavButton variant="button" label={"Write"} onPress={() => {}} />
              <NavButton variant="button" label={"SignIn"} onPress={() => {}} />
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
                <TagButton
                  key={item.id}
                  label={item.title}
                  icon="hash"
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
                <TagButton
                  key={item.id}
                  label={item.title}
                  icon="hash"
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

        <Box
          marginTop="m"
          flexDirection="row"
          style={{ marginHorizontal: 200 }}
          justifyContent="space-between"
        >
          {info.map((item) => {
            return (
              <Box flexDirection="row" alignItems="center">
                <CircleButton color={"greenish"} icon={"check"} />
                <Text>{item.label}</Text>
              </Box>
            );
          })}
        </Box>

        <Box paddingTop="xxl" style={{ marginHorizontal: 200 }}>
          <Box>
            <Text variant="webTitle">No ads. No problems.</Text>
            <Text variant="button">
              Your privacy stays yours. We don’t sell your data or target you
              with ads. Ever.
            </Text>
          </Box>
          <Box flexDirection="row" justifyContent="space-evenly">
            <Box paddingTop="xxl" alignItems="flex-end">
              <StartButton onPress={() => {}} />
            </Box>
            <Box paddingTop="xxl">
              <Text variant="subTitleA" fontSize={15}>
                We do things differently.
              </Text>
              <Text variant="subTextFooter">
                Medium is not like any other platform on
              </Text>
            </Box>
          </Box>
          <Box paddingTop="xxxl" alignItems="center" justifyContent="center">
            <Box backgroundColor="lightBlack" height={2} width={200} />
          </Box>
          <Box paddingTop="xxxl" flexDirection="row">
            <Box>
              <Text variant="webTitle">120 million</Text>
              <Text variant="webTitle">curious readers </Text>
              <Text variant="webTitle">and growing.</Text>
            </Box>
          </Box>
          <Box
            paddingVertical="xxl"
            alignItems="center"
            justifyContent="center"
          >
            <Text>One Subscription. Unlimited Ideas.</Text>
            <Box justifyContent="center" alignItems="center">
              <Text variant="subTextFooter">
                Read unlimited stories with an optional subscription of
                $5/month.
              </Text>

              <Text variant="subTextFooter">
                If it's not for you, cancel anytime.
              </Text>
            </Box>
          </Box>
          <Box paddingTop="xxxl" alignItems="center" justifyContent="center">
            <Box backgroundColor="lightBlack" height={2} width={200} />
          </Box>
          <Box alignItems="center">
            <Text variant="webTitle">Expand your reading.</Text>
            <Text variant="webTitle">Expand your mind.</Text>
          </Box>
          <Box alignItems="center" paddingTop="xl">
            <StartButton onPress={() => {}} />
          </Box>
        </Box>
        <Footer />
      </Box>
    );
  }
};

export default Home;
