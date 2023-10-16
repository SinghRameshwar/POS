import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ItemListComp } from "../component/ItemListComp";
import { colors } from "../../colors";
import { getScannedItem } from "../data/getScannedItem";
import NavigSaleItem from "../component/NavigSaleItem";

export default SaleScreen = ({ route, navigation }) => {
  const [itemsList, setItemList] = useState([]);

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

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      if (route.params.barCodeDetails != undefined) {
        scannedItemCodeId("1", route.params.barCodeDetails.data)
      }
    });
    return focusHandler;
  });


  return (
    <View style={styles.container}>
      <NavigSaleItem
        navig={navigation}
        titleName="Items Sale"
      />

      <View style={{ padding: 8, backgroundColor: colors.primary, flex: 1 }}>
        <ItemListComp itemList={itemsList} />
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
