import React, { useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import numFrmtND from "../../Helpers/numFrmtND";
import numFrmt from "../../Helpers/numFrmt";

export const ItemListComp = ({ itemList }) => {
  return (
    <>
      <View>
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
                  <Text style={{ fontSize: 14 }}> {numFrmtND(1)}, </Text> 
                  <Text style={{ fontSize: 14, color: "grey" }}>  
                    {"  Rate:- "}
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    ₹ {numFrmt(item.s_price)}{" "}
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 14, color: "grey", marginTop: 2 }}>
                    {"Total Amount  "}
                  </Text>
                  <Text style={{ fontSize: 14, color: "green", marginTop: 2 }}>
                    ₹ {numFrmt(1 * item.s_price)}
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

