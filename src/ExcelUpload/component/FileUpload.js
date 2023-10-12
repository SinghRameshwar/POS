import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NavigFileupload from "./NavigFileupload";
//import * as XLSX from "xlsx";
//import * as DocumentPicker from "expo-document-picker";

export default FileUpload = ({ route, navigation }) => {
  const chooseFile = async ($event) => {
    //   let result = await DocumentPicker.getDocumentAsync({});
    //   alert(result.assets[0].uri);
    //   console.log(result);
  };

  return (
    <View style={styles.container}>
      <NavigFileupload navig={navigation} titleName="File Upload" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          padding: 16,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "grey",
            width: 140,
            borderRadius: 10,
            alignItems: "center",
            marginRight: 20,
          }}
          onPress={() => chooseFile()}
        >
          <Text>Choose File </Text>
        </TouchableOpacity>

        <Text>No file chosen </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
