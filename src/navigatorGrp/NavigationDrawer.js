// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import "react-native-gesture-handler";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
/* ------------- Account Reports -----------*/
import Dashboard from "../DashBoard/Dashboard";
import CustomSidebarMenu from "./Component/CustomSidebarMenu";
import SaleScreen from "../salescreen/ComponentContainer/SaleScreen";
import InsertItemInStock from "../stockscreen/component/InsertItemInStock";
import FileUpload from "../ExcelUpload/component/FileUpload";
import BarCodeScannerComp from "../Helpers/BarCodeScannerComp";
import { StockList } from "../stockscreen/component/StockList";

/* ------------- Setting Menu Items -----------*/
import AboutApp from "../AppSettingV/Components/AboutApp";
import ContactUs from "../AppSettingV/Components/ContactUs";
import { LogOutModel } from "../Helpers/logoutModel";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image, StyleSheet } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function FirstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
        initialParams={{ navig: "" }}
      />
      {/* <Stack.Screen
        name="CompChangeView"
        component={CompChangeView}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

function SaleItemScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="SaleScreen">
      <Stack.Screen
        name="SaleScreen"
        component={SaleScreen}
        options={{ headerShown: false }}
        initialParams={{ navig: "" }}
      />
      <Stack.Screen
        name="BarCodeScannerComp"
        component={BarCodeScannerComp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function NewStockScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="InsertItemInStock">
      <Stack.Screen
        name="InsertItemInStock"
        component={InsertItemInStock}
        options={{ headerShown: false }}
        initialParams={{ navig: "" }}
      />
      <Stack.Screen
        name="BarCodeScannerComp"
        component={BarCodeScannerComp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function NavigationDrawer({ route, navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 1 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="Dashboard"
          options={{
            drawerLabel: "Dashboard",
            headerShown: false,
            drawerIcon: ({ focused, size }) => (
              <Image
                style={styles.image}
                source={require("../../assets/home.png")}
              />
            ),
          }}
          component={FirstScreenStack}
        />

        <Drawer.Screen
          name="SaleScreen"
          options={{
            drawerLabel: "Items Sale",
            headerShown: false,
            drawerIcon: ({ focused, size }) => (
              <Image
                style={styles.image}
                source={require("../../assets/home.png")}
              />
            ),
          }}
          component={SaleItemScreenStack}
        />

        <Drawer.Screen
          name="InsertItemInStock"
          options={{
            drawerLabel: "New Stock",
            headerShown: false,
            drawerIcon: ({ focused, size }) => (
              <Image
                style={styles.image}
                source={require("../../assets/home.png")}
              />
            ),
          }}
          component={NewStockScreenStack}
        />

        <Drawer.Screen
          name="StockList"
          options={{
            drawerLabel: "Stock List",
            headerShown: false,
            drawerIcon: ({ focused, size }) => (
              <Image
                style={styles.image}
                source={require("../../assets/home.png")}
              />
            ),
          }}
          component={StockList}
        />

        <Drawer.Screen
          name="FileUpload"
          options={{
            drawerLabel: "File Upload",
            headerShown: false,
            drawerIcon: ({ focused, size }) => (
              <Image
                style={styles.image}
                source={require("../../assets/home.png")}
              />
            ),
          }}
          component={FileUpload}
        />

        <Drawer.Screen
          name="Contact Us"
          options={{
            drawerLabel: "Contact Us",
            headerShown: false,
            drawerIcon: ({ focused, size }) => (
              <Image
                style={styles.image}
                source={require("../../assets/settings.png")}
              />
            ),
          }}
          component={ContactUs}
        />

        <Drawer.Screen
          name="About App"
          options={{
            drawerLabel: "About App",
            headerShown: false,
            drawerIcon: ({ focused, size }) => (
              <Icon
                style={{ paddingRight: 5, paddingLeft: 5, textAlign: "right" }}
                name="info"
                size={20}
                color="grey"
              />
            ),
          }}
          component={AboutApp}
        />

        <Drawer.Screen
          name="Logout"
          options={{
            drawerLabel: "Logout",
            headerShown: false,
            drawerIcon: ({ focused, size }) => (
              <Icon
                style={{ textAlign: "right" }}
                name="power-off"
                size={20}
                color="grey"
              />
            ),
          }}
          component={LogOutModel}
          initialParams={{ navig: "" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
});

export default NavigationDrawer;
