import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../../components";
import IconButton from "./IconButton";

interface HomeProps {}

const styles = StyleSheet.create({
  titleBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  titleMain: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const Home = ({}: HomeProps) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.titleBox}>
        <Title label="Medium" />
      </View>
      <View>
        <View>
          <Text style={styles.titleMain}>Smart stories for </Text>
          <Text style={styles.titleMain}>curious people.</Text>
        </View>
        <View>
          <View style={{ padding: 10 }}>
            <IconButton
              label={"Sign up with Google"}
              icon="google"
              onPress={() => {}}
            />
          </View>
          <View style={{ padding: 10 }}>
            <IconButton
              label={"Sign up with Facebook"}
              icon="facebook"
              onPress={() => {}}
            />
          </View>
          <View style={{ padding: 10 }}>
            <IconButton
              label={"Sign up with Email"}
              icon="mail"
              onPress={() => {}}
            />
          </View>
        </View>
        <View>
          <Text style={{ textAlign: "center" }}>
            Already have an account? Sign In
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ textAlign: "center" }}>
          By creating an account, I accept Medium's
        </Text>
        <Text style={{ textAlign: "center" }}>Terms of Service</Text>
      </View>
    </View>
  );
};

export default Home;
