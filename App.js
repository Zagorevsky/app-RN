import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

import Main from "./components/Main";
import * as LocalAuthentication from "expo-local-authentication";
import AuthScreen from "./components/AuthScreen";

const Stack = createNativeStackNavigator();


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
    auth.then((result) => {
      setIsAuthenticated(result.success);
      console.log(isAuthenticated)
      navigation.navigate('Home')
    });
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthScreen">
          {(props) => <AuthScreen {...props} onAuthenticate={onAuthenticate} />}
        </Stack.Screen>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
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
