import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SaleScreen } from "./src/salescreen/ComponentContainer/SaleScreen";
import { useEffect } from "react";
import StoreDB from "./src/Storages/StoreDB";

export default function App() {

  useEffect(() => {
    const Database = new StoreDB();
  }, []);

  return (
    <View style={styles.container}>
      <SaleScreen />
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
