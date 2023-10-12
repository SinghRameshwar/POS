import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ItemListComp } from "../component/ItemListComp";
import { colors } from "../../colors";
import { BarCodeScannerComp } from "../../Helpers/BarCodeScannerComp";
import { getScannedItem } from "../data/getScannedItem";
import NavigSaleItem from "../component/NavigSaleItem";

export default SaleScreen = ({ route, navigation }) => {
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

  return (
    <View style={styles.container}>
      <NavigSaleItem
        navig={navigation}
        titleName="Items Sale"
        setisScan={setisScan}
        isScan={isScan}
      />

      <View style={{ padding: 8, backgroundColor: colors.primary, flex: 1 }}>
        <ItemListComp itemList={itemsList} />
      </View>

      <View
        style={{
          position: "absolute",
          marginTop:"30%",
          width: "70%",
          height: "70%",
          backgroundColor:"#ffffff",
          borderRadius:10,
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
  },
});
