import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState, useRef, useEffect, useReducer } from "react";

export const Timer = () => {
  const [centiseconds, setCentiseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useInterval(() => {
    if (!timerOn) return;

    setCentiseconds((centiseconds) =>
      centiseconds === 99 ? 0 : centiseconds + 1
    );
  }, 10);

  useInterval(() => {
    if (!timerOn) return;

    setSeconds((seconds) => (seconds === 59 ? 0 : seconds + 1));
  }, 1000);

  useInterval(() => {
    if (!timerOn) return;

    setMinutes((minutes) => (minutes === 59 ? 0 : minutes + 1));
  }, 60000);

  useInterval(() => {
    if (!timerOn) return;

    setHours((hours) => (hours === 59 ? 0 : hours + 1));
  }, 3600000);

  return (
    <View>
      <Text>
        {String(hours).padStart(2, "0")}: {String(minutes).padStart(2, "0")}:{" "}
        {String(seconds).padStart(2, "0")} :{" "}
        {String(centiseconds).padStart(2, "0")}
      </Text>

      {timerOn === false && (
        <Button title="Start" onPress={() => setTimerOn(true)} />
      )}
      {timerOn === true && (
        <Button title="Stop" onPress={() => setTimerOn(false)} />
      )}
      {
        <Button
          title="Reset"
          onPress={() => {
            setTimerOn(false);
            setCentiseconds(0);
            setSeconds(0);
            setMinutes(0);
            setHours(0);
          }}
        />
      }
    </View>
  );
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
