import React, { useState, useEffect } from "react";
import { Pressable, View, TouchableHighlight, Text } from "react-native";
import { Icon } from "react-native-elements";

function Item(props) {
  return (
    <View
      style={{
        justifyContent: "center",
        borderRadius: 20,
        padding: 15,
        backgroundColor: "#3b3b3b",
        margin: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View stile={{}}>
          <Text style={{ color: "#8D9699", fontSize: 12 }}>{props.title}</Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              // marginTop: 12,
              // marginBottom: 4,
              fontWeight: "700",
            }}
          >
            {new Date(props.dataStart).toLocaleString()}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              // marginTop: 12,
              // marginBottom: 4,
              fontWeight: "700",
            }}
          >
            {new Date(props.dataFinish).toLocaleString()}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            props.onDelCard(props.id);
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              // marginTop: 10,
              fontWeight: "700",
            }}
          >
            {("0" + Math.floor(props.time % 60)).slice(-2)}
          </Text>
        </Pressable>
        {/* <Icon name="close" type="fontisto" color="#9999" style={{textAlign:"right"}}/> */}
      </View>
    </View>
  );
}

export default Item;
