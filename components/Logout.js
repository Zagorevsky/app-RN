import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, StyleSheet, View, Text } from "react-native";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Logout = () => {
  const navigation = useNavigation();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <View style={styles.blockButtons}>
      <Button title="Logout" buttonStyle={styles.buttons} onPress={logout} />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  buttons: {
    alignItems: "center",
  },
  blockButtons: {
    width: 200,
  },
});
