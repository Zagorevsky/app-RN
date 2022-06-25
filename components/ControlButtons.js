import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ControlButtons(props) {
  const StartButton = (
    <Button onPress={props.handleStart} title="Start" style={styles.buttons} />
  );
  const ActiveButtons = (
    <>
      <Button
        onPress={props.handlePauseResume}
        title={props.isPaused ? "Resume" : "Pause"}
        style={styles.buttons}
      />
      <Button
        onPress={props.handleReset}
        title="Finish"
        style={styles.buttons}
      />
    </>
  );
  return (
      <View style={styles.blockButtons}>
        {props.active ? ActiveButtons : StartButton}
      </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    margin: 10,
    width: 150,
  },
  blockButtons: {
    flex:1,
    elevation:2,
  },
});
