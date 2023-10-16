import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { itemInsert } from "../../Storages/insertQuery";
import Icon from "react-native-vector-icons/FontAwesome5";
import NavigNewStock from "./NavigNewStock";

export default InsertItemInStock = ({ route, navigation }) => {
  const [itemId, setitemId] = useState("");
  const [itemName, setitemName] = useState("");
  const [itemPurchase, setitemPurchase] = useState("");
  const [itemSale, setitemSale] = useState("");
  const [itemQty, setitemQty] = useState("");
  const ref_input1 = useRef();

  const goBackwithDataMethod = async () => {
    if (itemId == undefined || itemId == "") {
      alert("Please Enter Item Code!");
      return;
    } else if (itemName == undefined || itemName == "") {
      alert("Please Enter Item Name!");
      return;
    } else if (itemPurchase == undefined || itemPurchase == "") {
      alert("Please Enter Purchase Price!");
      return;
    } else if (itemSale == undefined || itemSale == "") {
      alert("Please Enter Sale Price!");
      return;
    } else if (itemQty == undefined || itemQty == "") {
      alert("Please Enter Item Qty!");
      return;
    }

    let item_list_ObjAr = {
      item_id: itemId,
      item_name: itemName,
      p_price: itemPurchase,
      s_price: itemSale,
      qty: itemQty,
    };
    await itemInsert(item_list_ObjAr).then((resp) => {
      alert(resp);
      clearField();
    });
  };

  const clearField = () => {
    setitemId("");
    setitemName("");
    setitemPurchase("");
    setitemSale("");
    setitemQty("");
    ref_input1.current.focus();
  };

  const scannedItemCodeId = (type, codeId) => {
    setitemId(codeId);
  };

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      if (route.params.barCodeDetails != undefined) {
        scannedItemCodeId("1", route.params.barCodeDetails.data)
      }
    });
    return focusHandler;
  });

  return (
    <View style={styles.container}>
      <NavigNewStock navig={navigation} titleName="New Stock" />
      <ScrollView
        style={{ padding: 16, paddingTop: "10%" }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ color: "grey", marginTop: 10 }}>Item Id/Code</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              flex: 1,
              height: 41,
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
              marginTop: 10,
            }}
            ref={ref_input1}
            autoCapitalize="none"
            placeholderTextColor="#003f5c"
            value={itemId}
            onChangeText={(name) => {
              setitemId(name);
            }}
          />

          <Icon
            onPress={() =>
              navigation.navigate("BarCodeScannerComp", {
                navTypeComp: "InsertItemInStock",
              })
            }
            style={{
              textAlign: "center",
              marginLeft: 8,
              paddingLeft: 10,
            }}
            name="barcode"
            size={50}
            color="grey"
          />
        </View>

        <Text style={{ color: "grey", marginTop: 10 }}>Item Name</Text>
        <TextInput
          style={{
            height: 41,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 10,
          }}
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          value={itemName}
          onChangeText={(name) => {
            setitemName(name);
          }}
        />

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", flex: 1, marginRight: 10 }}>
            <Text style={{ color: "grey", marginTop: 10 }}>
              {" "}
              Purchase Price
            </Text>

            <TextInput
              style={{
                height: 41,
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                marginTop: 10,
              }}
              keyboardType="decimal-pad"
              autoCapitalize="none"
              placeholderTextColor="#003f5c"
              value={itemPurchase}
              onChangeText={(name) => {
                setitemPurchase(name);
              }}
            />
          </View>

          <View style={{ flexDirection: "column", flex: 1, marginLeft: 10 }}>
            <Text style={{ color: "grey", marginTop: 10 }}> Sale Price</Text>

            <TextInput
              style={{
                height: 41,
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                marginTop: 10,
              }}
              keyboardType="decimal-pad"
              autoCapitalize="none"
              placeholderTextColor="#003f5c"
              value={itemSale}
              onChangeText={(name) => {
                setitemSale(name);
              }}
            />
          </View>
        </View>

        <Text style={{ color: "grey", marginTop: 10 }}>Item Qty</Text>

        <TextInput
          style={{
            width: 300,
            height: 41,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 10,
          }}
          keyboardType="decimal-pad"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          value={itemQty}
          onChangeText={(name) => {
            setitemQty(name);
          }}
        />

        <TouchableOpacity onPress={() => goBackwithDataMethod()}>
          <Text
            style={{
              width: 150,
              marginTop: 50,
              textAlign: "center",
              alignSelf: "flex-end",
              fontWeight: "bold",
              fontSize: 18,
              marginRight: 10,
              color: "grey",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
            }}
          >
            Create
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f5f5",
  },
});
