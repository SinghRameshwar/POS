import React from "react";
import { Image, StyleSheet, View ,Text} from "react-native";

export default function Logo() {
  return (
    <View style ={{ marginBottom: 50, alignItems:"center"}}>
    <Image
      style={styles.image}
      source={require("../../../assets/icv-logo.png")}
    />
    <Text style = {{fontSize:24, color:"grey", marginTop:-25}}>   PAYROLL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    resizeMode: "stretch"
  },
});
