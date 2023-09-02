import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ItemListComp } from "../component/ItemListComp";
import { colors } from "../../colors";

export const SaleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style = {{padding:8, backgroundColor:colors.primary, flex:1.2}}>
          <ItemListComp />
        </View>

        <View style = {{padding:8, backgroundColor:"white", flex:.8}}>
        <ItemListComp />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
