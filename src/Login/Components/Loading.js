import React, { useState } from "react";
import {
  Text,
  View,
} from "react-native";
import {ActivityIndicator } from "@react-native-material/core";

export default function Loading(props) {
  return (
    <View
      style={{
        backgroundColor: "rgba(52, 52, 52, 0.4)",
        height: "100%",
        width: "100%",
        alignSelf: "center",
        position: "absolute",
        zIndex: 1,
        display: props.lodingType,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: "100%",
          height: 110,
          width: 200,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "#000000", alignSelf: "center", padding: 20 }}>
          {props.message}
        </Text>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    </View>
  );
};
