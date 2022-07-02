import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import Popup from "./Popup";
import Item from "./Item";
import AuthForm from "./AuthForm";
import Logout from "./Logout";

function Main() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [timeRecording, setTimeRecording] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataStart, setDataStart] = useState(0);
  const [dataFinish, setDataFinish] = useState(0);
  const [dataCardTime, setDataCardTime] = useState([]);
  const [onFormRecording, setOnFormRecording] = useState(false);

  const addData = (title) => {
    return setDataCardTime([
      ...dataCardTime,
      {
        id: Date.now(),
        dataStart: dataStart,
        dataFinish: dataFinish,
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
      }, 10);
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
    setOnFormRecording(true);
    setModalVisible(true);
    setTimeRecording(time);
    setDataFinish(Date.now());
    setIsActive(false);
    setTime(0);
  };

  const onDelCard = (id) => {
    setDataCardTime(dataCardTime.filter((card) => id !== card.id));
  };

  return (
    <View style={styles.centeredView}>
      <Logout />
      <Popup
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        timeRecording={timeRecording}
        dataStart={dataStart}
        addData={addData}
        dataCardTime={dataCardTime}
        setOnFormRecording={setOnFormRecording}
        onFormRecording={onFormRecording}
        onDelCard={onDelCard}
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

export default Main;
