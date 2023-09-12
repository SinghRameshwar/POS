import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import StoreDB from "./src/Storages/StoreDB";
import RootstackNavigation from "./src/navigatorGrp/RootstackNavigation";

export default function App() {

  useEffect(() => {
    const Database = new StoreDB();
  }, []);

  return (
    <View style={styles.container}>
      <RootstackNavigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
