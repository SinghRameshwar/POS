import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Linking } from "react-native";
import NavigationHaderAbout from "./NavigationHaderAbout";
import Logo from "../../Login/Components/Logo";

function AboutApp({navigation}){
  
    return (
      <>
        <View style={styles.container}>
        <NavigationHaderAbout 
        navig = {navigation}
        titleName = "About App" />
        
        <View style = {{alignItems: "center",justifyContent: "center",flex: 1}}>
        <Logo />
        <Text>Version: 2.2.0</Text>
        <Text>©2017 Adansa Inc.</Text>

        <TouchableOpacity onPress={()=> Linking.openURL('mailto:support@realbooks.in?subject=FeedBack about Realbooks App.&body=Dear Realbooks,\n\n\n')}
        title="" >
        <Text style={{color:"blue", marginTop:20, textDecorationLine: "underline"}}>Send Feedback</Text>
        </TouchableOpacity>
        <Text style={{color:"grey", marginTop:0}}>Tell us what you think</Text>

        <TouchableOpacity onPress={()=> Linking.openURL('mailto:adansa.app@gmail.com?subject=Realbooks App Error Report&body=Dear Realbooks,\n\n\n')}
        title="" >
        <Text style={{color:"blue", marginTop:20, textDecorationLine: "underline"}}>Report a problem</Text>
        </TouchableOpacity>
        <Text style={{color:"grey", marginTop:0}}>Let us know about a bug or problem</Text>

        <View style = {{width:"90%",height:1,backgroundColor:"grey",marginTop:20}}/>

        <Text style = {{textAlign:"center", marginTop:20, color:"grey"}}>Realbooks is not just an online accounting software.
          {"\n"}It's Business Intelligence Redefined.</Text>

        <TouchableOpacity onPress={()=>{ Linking.openURL('https://realbooks.in/privacy-policy/')}}>
        <Text style = {{textAlign:"center", marginTop:20, color:"blue", textDecorationLine: "underline"}}>Privacy Policy</Text>
        </TouchableOpacity>

        
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
});


export default AboutApp;
