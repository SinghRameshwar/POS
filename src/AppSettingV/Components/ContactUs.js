import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import NavigationHaderAbout from "./NavigationHaderAbout";
import MapView,{Marker} from "react-native-maps";


function ContactUs({navigation}) {
  const vp=[[140.6971494, -74.2598657],[140.596708, -74.1540771]]

  const mapViewRender = () => {
    try{
    return (
      <MapView
        style={{ flex: 1, marginTop: 16, marginLeft: 16, marginRight: 16 }}
        initialRegion={{
          longitude: 140.6971494,
          latitude: -74.2598657,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {vp.map((m) => (
          <Marker
            coordinate={{
              longitude: m[0],
              latitude: m[1],
            }}
          ></Marker>
        ))}
      </MapView>
    );
      }catch {
        console.log("Error:- ","Map View Error")
      }
  };


  return (
    <>
      <View style={styles.container}>
        <NavigationHaderAbout navig={navigation} titleName="Contact Us" />
        {mapViewRender()}
            <View style = {{marginRight:16,marginLeft:16,padding:16,borderColor:"grey",borderRadius:2,borderBottomWidth:1,borderTopWidth:1,borderRightWidth:1,borderLeftWidth:1}}>
              <Text style = {{fontSize:24,color:"#457371"}}>
                Contact Us
              </Text>
              <View style = {{flexDirection:"row"}}>
              <Image style={styles.image} source={require("../../../assets/settings.png")} />
              <Text style = {{fontSize:14,color:"grey"}}>
                98/7A Harish Mukherjee Road, Kolkata -700 025
              </Text>
              </View>
              <View style = {{flexDirection:"row"}}>
              <Image style={styles.image} source={require("../../../assets/settings.png")} />
              <Text style = {{fontSize:14,color:"grey"}}>
                support@realbooks.in
              </Text>
              </View>
              <View style = {{flexDirection:"row"}}>
              <Image style={styles.image} source={require("../../../assets/settings.png")} />
              <Text style = {{fontSize:14,color:"grey"}}>
                +91 -99 108 -22099
              </Text>
              </View>
            </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  image: {
    width:20,
    height:20,
    marginRight:5
  },
});

export default ContactUs;
