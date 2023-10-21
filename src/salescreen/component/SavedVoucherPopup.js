import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
  Platform,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import numFrmt from "../../Helpers/numFrmt";
import { InvoiceTempHtml } from "./InvoiceTempHtml";

function SavedVoucherPopup({ popshow, payload, totalAmt, navigation, isEdit }) {
  const [selectedPrinter, setSelectedPrinter] = useState();
  const ppopupSlt = () => {
    navigation.pop(2);
  };

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const html = InvoiceTempHtml(payload, "Address");
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
    navigation.pop(2);
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const html = InvoiceTempHtml(payload, "address1");
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
    navigation.pop(2);
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
    navigation.pop(2);
  };

  const printandShareView = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Icon
          style={{ textAlign: "right", marginRight: 40 }}
          name="print"
          onPress={() => print()}
          size={20}
          color="#000"
        />

        <Icon
          style={{ textAlign: "right", marginRight: 10 }}
          name="share"
          onPress={() => printToFile()}
          size={20}
          color="#000"
        />
        {Platform.OS === "ios" && (
          <>
            <View style={styles.spacer} />
            <Button title="Select printer" onPress={selectPrinter} />
            <View style={styles.spacer} />
            {selectedPrinter ? (
              <Text
                style={styles.printer}
              >{`Selected printer: ${selectedPrinter.name}`}</Text>
            ) : undefined}
          </>
        )}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "rgba(52, 52, 52, 0.4)",
        height: "100%",
        width: "100%",
        alignSelf: "center",
        position: "absolute",
        zIndex: 1,
        display: popshow,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          marginTop: "50%",
          height: 210,
          width: "90%",
          backgroundColor: "#FFFFFF",
          borderRadius: 5,
          alignSelf: "center",
          padding: 15,
        }}
      >
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontSize: 21 }}>Success</Text>
          {printandShareView()}
        </View>
        <Text style={{ fontSize: 15, color: "black", marginTop: 20 }}>
          Voucher successfully {isEdit ? "updated" : "created"} !
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 15, color: "black" }}>
            Total Party Amount
          </Text>
          <Text style={{ fontSize: 15, color: "green", marginRight: 15 }}>
            {numFrmt(totalAmt)}
          </Text>
        </View>

        <View
          style={{ alignSelf: "flex-end", flexDirection: "row", marginTop: 15 }}
        >
          <TouchableWithoutFeedback onPress={() => ppopupSlt()}>
            <Text style={{ padding: 20, color: "black", fontSize: 21 }}>
              OK
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

export default SavedVoucherPopup;

const styles = StyleSheet.create({
  spacer: {
    height: 8,
  },
  printer: {
    textAlign: "center",
  },
});
