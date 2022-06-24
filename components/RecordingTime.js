import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";

export default function RecordingTime(props) {
  const [title, setTitle] = useState("New time");

  return (
    <View style={styles.blockInput}>
      <TextInput
        onChangeText={setTitle}
        autoFocus
        style={styles.input}
        value={title}
        placeholder="New time"
      />
      <Text>{props.time}</Text>
      <Button
        onPress={() => props.setTitleRecording(title)}
        title={"Save"}
        style={styles.buttons}
      />
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
  blockInput: {
    display: "flex",
    width: 200,
  },
  text: {
    color: "#f5f5f5",
    fontSize: 40,
    textAlign: "center",
  },
  input: {
    padding: 10,
    height: 40,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
