import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Timer from "./components/Timer";
import ControlButtons from "./components/ControlButtons";
import Popup from "./components/Popup";
import { Video, AVPlaybackStatus } from "expo-av";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [timeRecording, setTimeRecording] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataStart, setDataStart] = useState(0);
  const [dataCardTime, setDataCardTime] = useState([]);

  const addData = (title) => {
    return setDataCardTime([
      ...dataCardTime,
      {
        id: Date.now(),
        dataStart: dataStart,
        title: title,
        time: timeRecording,
      },
    ]);
  };

  useEffect(() => {
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
    setDataStart(Date.now());
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setModalVisible(true);
    setTimeRecording(time);
    setIsActive(false);
    setTime(0);
  };

  return (
    <View style={styles.centeredView}>
      <Popup
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        timeRecording={timeRecording}
        dataStart={dataStart}
        addData={addData}
        dataCardTime={dataCardTime}
      />
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0c1b",
  },
  backgroundVideo: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
});

export default App;
