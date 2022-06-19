import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Timer } from "./components/Timer.js";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>New timer for Anastasia</Text>
      <Timer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
