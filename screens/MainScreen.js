import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Timer from "../components/Timer";
import ControlButtons from "../components/ControlButtons";
import ModalScreen from "./ModalScreen";
const Stack = createNativeStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';

function MainScreen() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [timeRecording, setTimeRecording] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataStart, setDataStart] = useState(0);
  const [dataFinish, setDataFinish] = useState(0);
  const [cardTime, setCardTime] = useState([]);
  const [onFormRecording, setOnFormRecording] = useState(false);

  const addData = (title) => {
    return setCardTime([
      ...cardTime,
      {
        id: Date.now(),
        dataStart: dataStart,
        dataFinish: dataFinish,
        title: title,
        time: timeRecording,
      },
    ]);
  };

  const onDelCard = (id) => {
    setCardTime(cardTime.filter((card) => id !== card.id));
  };

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
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

  const createTwoButtonAlert = (id) =>
    Alert.alert("Delete a card", "Please confirm your action", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => onDelCard(id) },
    ]);

  return (
    <View style={styles.centeredView}>
      <ModalScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        timeRecording={timeRecording}
        dataStart={dataStart}
        addData={addData}
        cardTime={cardTime}
        setOnFormRecording={setOnFormRecording}
        onFormRecording={onFormRecording}
        onDelCard={createTwoButtonAlert}
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

export default MainScreen;
