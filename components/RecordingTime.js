import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { Timer } from "./Timer";

export default function RecordingTime(props) {
  const [title, setTitle] = useState("New time");

console.log(props.timeRecording)

  return (
    <View style={styles.blockInput}>
      {/* <Timer time={props.timeRecording}/> */}
      <TextInput
        onChangeText={setTitle}
        autoFocus
        style={styles.input}
        value={title}
        placeholder="New time"
      />
      <Button
        onPress={() => {
          props.setTitleRecording(title);
          props.setModalVisible(false);
        }}
        title={"Save"}
        style={styles.buttons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d0c1b",
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
