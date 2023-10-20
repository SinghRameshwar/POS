import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import StoreDB from "./src/Storages/StoreDB";
import RootstackNavigation from "./src/navigatorGrp/RootstackNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [newLogin, setnewLogin] = useState("");

  async function alReadyLoginCheck() {
    setnewLogin(await AsyncStorage.getItem("cid"));
  }

  useEffect(() => {
    alReadyLoginCheck();
    const Database = new StoreDB();
  }, []);

  function newUserCheck() {
    //if (newLogin != "" && newLogin != null) {
      return <RootstackNavigation loginType="NavigationDrawer" />;
    // } else if (newLogin == null) {
    //   return <RootstackNavigation loginType="login" />;
    // }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {newUserCheck()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
