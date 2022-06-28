import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import RecordingTime from "./RecordingTime";

const Popup = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(!props.modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => {
                props.setModalVisible(false);
              }}
            >
              <Icon name="caret-down" type="fontisto" color="#3b3b3b" />
            </Pressable>

            <RecordingTime
              timeRecording={props.timeRecording}
              setModalVisible={props.setModalVisible}
              dataStart={props.dataStart}
              addData={props.addData}
            />
            <ScrollView contentContainerStyle={styles.contentContainer}>
              {props.dataCardTime.map((card) => (
                <View key={card.id}>
                  <Text style={styles.text}>
                    {new Date(card.dataStart).getDate()} /{" "}
                    {new Date(card.dataStart).getMonth()} /{" "}
                    {new Date(card.dataStart).getFullYear()}
                  </Text>
                  <Text style={styles.text}>{card.title}</Text>
                  <Text style={styles.text}>{card.time}</Text>
                </View>
              ))}
            </ScrollView>
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
    height: "90%",
    width: "100%",
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
  },
  text: {
    color: "#f5f5f5",
    fontSize: 30,
    textAlign: "center",
  },
});

export default Popup;
