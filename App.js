import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Timer from "./components/Timer";
import ControlButtons from "./components/ControlButtons";
import Popup from "./components/Popup";

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [timeRecording, setTimeRecording] = useState(0);
  const [titleRecording, setTitleRecording] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 10); // 1000
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setTimeRecording(Math.floor((time / 60) % 60));
    setModalVisible(true);
    setIsActive(false);
    setTime(0);
    setTitleRecording("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Timer time={time} />
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </View>
      <Popup
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        timeRecording={timeRecording}
        setTitleRecording={setTitleRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0c1b",
  },
  block: {
    elevation: 2,
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#f5f5f5",
    fontSize: 20,
    textAlign: "center",
  },
});

export default StopWatch;
