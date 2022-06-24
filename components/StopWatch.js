import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import RecordingTime from "./RecordingTime";

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [timeRecording, setTimeRecording] = useState(0);
  const [titleRecording, setTitleRecording] = useState("");

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
    setIsActive(false);
    setTime(0);
    setTitleRecording("");
  };

  return (
    <View style={styles.container}>
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
      {timeRecording && !titleRecording ? (
        <>
          <Text style={styles.text}>{timeRecording} min</Text>
          <RecordingTime setTitleRecording={setTitleRecording} />
        </>
      ) : (
        <></>
      )}

      {titleRecording ? (
        <>
          <Text style={styles.text}>{titleRecording} - {timeRecording}</Text>
        </>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    color: "#f5f5f5",
    fontSize: 20,
    textAlign: "center",
  },
});

export default StopWatch;
