import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import RecordingTime from "./RecordingTime";

const Popup = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Ваши данные будут удалены");
          // props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View>
              <Pressable
                onPress={() => {
                  props.setModalVisible(false);
                }}
              >
                <Icon
                  name="caret-down"
                  type="fontisto"
                  color="#3b3b3b"
                  size="30"
                />
              </Pressable>
            </View>
            <RecordingTime
              timeRecording={props.timeRecording}
              setTitleRecording={props.setTitleRecording}
              setModalVisible={props.setModalVisible}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#2f2f2f",
    borderRadius: 20,
    width: "100%",
    height: 450,
    elevation: 5,
  },
});

export default Popup;
