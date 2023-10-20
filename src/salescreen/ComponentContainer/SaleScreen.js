import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ItemListComp } from "../component/ItemListComp";
import { colors } from "../../colors";
import { getScannedItem } from "../data/getScannedItem";
import NavigSaleItem from "../component/NavigSaleItem";
import { TouchableHighlight } from "react-native-gesture-handler";

export default SaleScreen = ({ route, navigation }) => {
  const [itemsList, setItemList] = useState([]);
  const [rowCount, setrowCount] = useState(0);
  const [itemTotal, setitemTotal] = useState(0);
  const  voucherRowPrimarKey = useRef()

  // Call Back Function
  const scannedItemCodeId = (type, codeId) => {
    getScannedItem(codeId).then((result) => {
      if (result == "No Item in stock!" || result == undefined) {
        alert(result);
      } else {
        setItemList([...itemsList, result]);
        setrowCount(rowCount + 1)
        setitemTotal(itemTotal + result.s_price)
      }
    });
  };

  useEffect(() =>{
    voucherRowPrimarKey.current = new Date();
  },[])

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

      <Text
          style={{
            fontSize: 10,
            color: "#D0CFCF",
            paddingLeft: 10,
            paddingRight: 16,
            paddingTop: 10,
            paddingBottom:5
          }}
        >
          The point of sale or point of purchase is the time and place at which
          a retail transaction is completed.
        </Text>
       <View style = {{backgroundColor:colors.primary, height:1}}></View>

        <View style={styles.viewBottom2}>
          <View style={{ flex: 1}}>
            <Text style={{ fontSize: 12, color: "black" }}>
              {rowCount} Items
            </Text>
            <Text style={{ fontSize: 15, color: "#8B0000" }}>
            ₹ {itemTotal}
            </Text>
            <Text style={{ fontSize: 12, color: "#ADACAC" }}>Item Total</Text>
          </View>

          <TouchableHighlight
            style={{
              backgroundColor: "grey",
              width:200,
              borderRadius: 5,
              padding: 5,
              paddingLeft: 10,
              paddingRight: 10,
              flexDirection: "row",
            }}
            onPress={() => {}}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: 1,
                }}
              >
                <Text
                  style={{ fontSize: 15, textAlign: "right", color: "white" }}
                >
                  View Card
                </Text>

                <Text
                  style={{ fontSize: 12, textAlign: "right", color: "white" }}
                >
                  Next Items bill with taxes
                </Text>
              </View>

              <View
                style={{
                  flex: 0.1,
                  alignSelf: "center",
                  backgroundColor: "white",
                  borderRadius: 20,
                  borderColor: "black",
                  height: "45%",
                }}
              ></View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  viewBottom2: {
    flex: 0.09,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems:"center",
    padding: 10,
    height: "100%",
  },

});
