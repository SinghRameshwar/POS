import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class NavigSaleItem extends React.Component {
  render() {
    const toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navig.openDrawer();
    };

    return (
      <>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={toggleDrawer}>
            {/*Donute Button Image */}
            <Image
              source={require("../../../assets/ic_menu.png")}
              style={styles.tongleBtn}
            />
          </TouchableOpacity>

          <Text style={styles.haderTitle}>{this.props.titleName}</Text>

          <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 10 }}>
            {/*Donute Button Image */}
            <Icon
              onPress={()=> this.props.setisScan(this.props.isScan ? false : true)}
              style={{ textAlign: "right" }}
              name="barcode"
              size={50}
              color="white"
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    width: "100%",
    height: 90,
    paddingTop: 30,
    backgroundColor: "#0070C3",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },

  tongleBtn: {
    width: 35,
    height: 35,
    tintColor: "white",
    marginLeft: 5,
  },

  haderTitle: {
    color: "#FFFFFF",
    marginLeft: 15,
    fontSize: 17,
  },
});
