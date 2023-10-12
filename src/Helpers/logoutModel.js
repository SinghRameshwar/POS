import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export const LogOutModel = ({ route, navigation }) => {
  

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      AsyncStorage.getAllKeys()
        .then((keys) =>{ AsyncStorage.multiRemove(keys)})
        .then(() => route.params.navig.replace("login"));
    });
    return focusHandler;
  });
};
