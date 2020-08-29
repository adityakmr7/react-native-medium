import React from "react";
import { View } from "react-native";
import { Facebook, Google, Mail } from "../../assets";
import { Box, Text, Title } from "../../components";
import IconButton from "./IconButton";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <Box
      backgroundColor="lightGreen"
      flex={1}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box justifyContent="center" alignItems="center" paddingVertical="m">
        <Title label="Medium" />
      </Box>
      <View>
        <Box>
          <Text variant="subTitleA">Smart stories for </Text>
          <Text variant="subTitleA">curious people.</Text>
        </Box>
        <View>
          <IconButton
            label={"Sign up with Google"}
            icon={<Google />}
            onPress={() => {}}
          />

          <IconButton
            label={"Sign up with Facebook"}
            icon={<Facebook />}
            onPress={() => {}}
          />

          <IconButton
            label={"Sign up with Email"}
            icon={<Mail />}
            onPress={() => {}}
          />
        </View>
        <View>
          <Text textAlign="center">
            Already have an account? <Text variant="link">Sign In</Text>
          </Text>
        </View>
      </View>
      <Box marginVertical="m">
        <Text textAlign="center">
          By creating an account, I accept Medium's
        </Text>
        <Text textAlign="center">Terms of Service</Text>
      </Box>
    </Box>
  );
};

export default Home;
