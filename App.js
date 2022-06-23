import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import StopWatch from "./components/StopWatch.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New timer for Anastasia</Text>
      <StopWatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0c1b",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  text: {
    color:  "#f5f5f5",
    fontSize: 40,
    textAlign: 'center'
  }
});
