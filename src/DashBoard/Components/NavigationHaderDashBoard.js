import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { color } from "react-native-reanimated";

export default class NavigationHaderDashBoard extends React.Component {


  render() {

    const toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navig.openDrawer()
    };

    return (
      <>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <TouchableOpacity onPress={toggleDrawer}>
              {/*Drawer Button Image */}
              <Image
                source={require("../../../assets/ic_menu.png")}
                style={styles.tongleBtn}
              />
            </TouchableOpacity>

            <Text style={{ color: "white", marginRight: 20 }}>{this.props.dtTime}</Text>
          </View>
        </View>
      </>

    );
  }
}


const styles = StyleSheet.create({

  container: {
    backgroundColor: "#0070C3",
    width: "100%",
    height: "30%",
    borderBottomEndRadius:50,
    borderBottomStartRadius:50
  },

  headerView: {
    width: "100%",
    height: 90,
    paddingTop: 50,
    flexDirection: "row",
    paddingLeft: 15,
    justifyContent: "space-between",
    alignItems: "center",

  },

  tongleBtn: {
    width: 35,
    height: 35,
    tintColor: "white",
    marginLeft: 5
  },

  haderTitle: {
    color: "white",
    marginLeft: 20,
    fontSize: 17
  },

});