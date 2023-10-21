import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import NavigNewStock from "./NavigNewStock";
import { getItemList } from "../../SqlQuery/getItemList";
import numFrmt from "../../Helpers/numFrmt";
import numFrmtND from "../../Helpers/numFrmtND";

export const StockList = ({ route, navigation }) => {
  const [itemList, setitemList] = useState([]);

  useEffect(() => {
    getItemListToDataBase();
  }, []);

  getItemListToDataBase = async () => {
    await getItemList().then((resp) => {
      //console.log("-----------",resp)
      setitemList(resp);
    });
  };

  return (
    <>
      <View style={styles.container}>
        <NavigNewStock navig={navigation} titleName="Stock List" />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={itemList}
          renderItem={({ item }) => (
            <View
              style={{
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 15,
                alignItems:"center",
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.image}
                source={require("../../../assets/ic_image.png")}
              />
              <View style={{ paddingLeft: 16, flex:1 }}>
                <Text style={{ fontSize: 18 }}>{item.item_name}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 14, color: "grey" }}>{"Qty:-"}</Text>
                  <Text style={{ fontSize: 14 }}> {numFrmtND(item.qty)}, </Text>
                  <Text style={{ fontSize: 14, color: "grey" }}>
                    {"  Rate:- "}
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    ₹ {numFrmt(item.p_price)}{" "}
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 14, color: "grey", marginTop: 2 }}>
                    {"Stock Value  "}
                  </Text>
                  <Text style={{ fontSize: 14, color: "green", marginTop: 2 }}>
                    ₹ {numFrmt(item.qty * item.p_price)}
                  </Text>
                </View>
                <View
                  style={{ backgroundColor: "grey", height: 1, marginTop: 15 }}
                />
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f5f5",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "stretch",
    borderRadius:10,
  },
});
