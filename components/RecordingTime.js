import { useState } from "react";
import { StyleSheet, Alert, View, TextInput, Pressable } from "react-native";
import { Button, Icon } from "react-native-elements";
import Timer from "./Timer";

export default function RecordingTime(props) {
  const [title, setTitle] = useState("New time");

  return (
    <View style={styles.view}>
      <Timer time={props.timeRecording} />
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
        title="Save"
        buttonStyle={styles.buttons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  buttons: {
    margin: 10,
    width: 200,
  },
  view: {
    flex: 1,
    alignItems: "center",
  },
});
