import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

export default class NavigFileupload extends React.Component {
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
