import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import AuthScreen from "./screens/AuthScreen";
import * as LocalAuthentication from "expo-local-authentication";
// import {Realm, createRealmContext} from '@realm/react';


export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Enter Password",
    });
    auth
      .then((result) => {
        setIsAuthenticated(result.success);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <MainScreen />
      ) : (
        <AuthScreen onAuthenticate={onAuthenticate} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0c1b",
    alignItems: "center",
    justifyContent: "center",
  },
});
