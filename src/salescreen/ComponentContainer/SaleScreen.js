import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ItemListComp } from "../component/ItemListComp";
import { colors } from "../../colors";
import { BarCodeScannerComp } from "../../Helpers/BarCodeScannerComp";
import { itemInsert } from "../../Storages/insertQuery";

export const SaleScreen = () => {
  const insertItem = async () => {
    let item_list_ObjAr = {
      item_id: "",
      item_name: "",
      p_price: 0,
      s_price: 0,
      qty: 10,
    };

    for (let i = 0; i < 20; i++) {
      item_list_ObjAr.item_name = "";
      item_list_ObjAr.p_price = 2 * i;
      item_list_ObjAr.s_price = 3 * i;
      await itemInsert(item_list_ObjAr).then((resp) => {
        console.log("--------", resp);
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          marginTop: 50,
          marginBottom: 20,
          padding: 10,
          backgroundColor: "grey",
          width: 140,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() => insertItem()}
      >
        <Text>Insert New Item </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{ padding: 8, backgroundColor: colors.primary, flex: 1.2 }}
        >
          <ItemListComp />
        </View>

        <BarCodeScannerComp />

        <View style={{ padding: 8, backgroundColor: "white", flex: 0.8 }}>
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
