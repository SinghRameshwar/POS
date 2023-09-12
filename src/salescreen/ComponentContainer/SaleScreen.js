import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ItemListComp } from "../component/ItemListComp";
import { colors } from "../../colors";
import { BarCodeScannerComp } from "../../Helpers/BarCodeScannerComp";
import { getScannedItem } from "../data/getScannedItem";
import * as XLSX from "xlsx";
import * as DocumentPicker from "expo-document-picker";

export const SaleScreen = ({ route, navigation }) => {
  const [itemsList, setItemList] = useState([]);
  const [isScan, setisScan] = useState(false);

  // Call Back Function
  const scannedItemCodeId = (type, codeId) => {
    getScannedItem(codeId).then((result) => {
      if (result == "No Item in stock!" || result == undefined) {
        alert(result);
      } else {
        setItemList([...itemsList, result]);
      }
    });
  };

  const chooseFile = async ($event) => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.assets[0].uri);
    console.log(result);
  };

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
        onPress={() => navigation.navigate("compslt")}
      >
        <Text>Insert New Item </Text>
      </TouchableOpacity>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "grey",
            width: 140,
            borderRadius: 10,
            alignItems: "center",
            marginRight: 20,
          }}
          onPress={() => chooseFile()}
        >
          <Text>Choose File </Text>
        </TouchableOpacity>

        <Text>No file chosen </Text>
      </View>

      <TouchableOpacity
        style={{
          marginBottom: 20,
          padding: 10,
          backgroundColor: "grey",
          width: 140,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() => setisScan(true)}
      >
        <Text>Scane Barcode</Text>
      </TouchableOpacity>

      <View style={{ padding: 8, backgroundColor: colors.primary, flex: 1.2 }}>
        <ItemListComp itemList={itemsList} />
      </View>

      <View
        style={{
          position: "absolute",
          width: "70%",
          height: "70%",
          alignSelf: "center",
          display: isScan ? "flex" : "none",
        }}
      >
        <BarCodeScannerComp
          scannedItemCodeId={scannedItemCodeId}
          setisScan={setisScan}
        />
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
