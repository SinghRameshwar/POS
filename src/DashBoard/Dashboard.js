import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import NavigationHaderDashBoard from "./Components/NavigationHaderDashBoard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

export default Dashboard = ({ navigation, route }) => {
  const [dt, setDt] = useState(new Date().toLocaleString());
  const [loading, setLoading] = useState("none");
  const [punchTag, setpunchTag] = useState(0);
  const [empDetls, setempDetls] = useState({});
  const [punchInTime, setpunchInTime] = useState("");
  const [location, setLocation] = useState("");
  const [locationUI, setlocationUI] = useState("");

  const currentDateGet = () => {
    const d = new Date();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();
    return day + "-" + month + "-" + year;
  };

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  

  

  return (
    <View style={styles.maincontainer1}>
      <NavigationHaderDashBoard navig={navigation} dtTime={dt} />
      <View style={{ marginTop: -120 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
         
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer1: {
    flex: 1,
    backgroundColor: "white",
  },

  profilecontainer: {
    minWidth: "95%",
    minHeight: "15%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    padding: 20,
  },

  textStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  details: {
    fontSize: 16,
    marginBottom: 3,
  },
});
