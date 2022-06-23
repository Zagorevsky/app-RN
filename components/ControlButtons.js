import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ControlButtons(props) {
  return (
    <View style={styles.controlButtons}>
      <View style={styles.blockButtons}>
        <Button
          onPress={props.handleStart}
          title="Start"
          style={styles.buttons}
        />
         <Button
          onPress={props.handlePauseResume}
          title={props.isPaused ? "Resume" : "Pause"}
          style={styles.buttons}
        />
      </View>
      <View style={styles.blockButtons}>
        <Button
          onPress={props.handleReset}
          title="Save"
          style={styles.buttons}
        /><Button
          onPress={props.handleReset}
          title="Stop"
          style={styles.buttons}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controlButtons: {
    margin: 10,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    margin: 10,
  },
  blockButtons: {
    display: "flex",
    flexDirection: "row"
  }
});
