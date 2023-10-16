import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";

export const StockList = ({ itemList }) => {






    
  return (
    <>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={itemList}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontSize: 18 }}>Item Name:- {item.item_name}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 14 }}>Item Qty:- 1, </Text>
                <Text style={{ fontSize: 14 }}>
                  Item Rate:- {item.s_price},{" "}
                </Text>
                <Text style={{ fontSize: 14, color: "red" }}>
                  Total:- {1 * item.s_price}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};
