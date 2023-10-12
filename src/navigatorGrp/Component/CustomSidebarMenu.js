// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
 
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
 
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
 
const CustomSidebarMenu = (props) => {

  const compViewCall = () =>{
    // props.navigation.openDrawer()
    // props.navigation.navigate('CompChangeView')
  }
 
  return (
    
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => compViewCall()}>
      <View style = {styles.headerView}>
      <Image
        source={require("../../../assets/ic_realbooks-web.png")}
        style={styles.sideMenuProfileIcon}/>
        
        <Text style = {{ marginTop:10,color: "#FFFFFF",fontSize:15}} numberOfLines={1}>
            {global.storedEmailId}
        </Text>
        <Text style = {{marginTop:2,color: "#FFFFFF",fontSize:12}} numberOfLines={1}>
             {global.scomp}
        </Text>
        <Text style = {{ marginTop:2,color: "#FFFFFF",fontSize:11}} numberOfLines={1}>
            {global.fromDate} - {global.toDate}
        </Text>
      </View>
      </TouchableWithoutFeedback>

      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <DrawerItemList {...props} />
        <View style = {{height:50}}/>
      </DrawerContentScrollView>
      
      <Text
        style={{
          fontSize: 12,
          textAlign: 'center',
          color: '#B0E0E6'
        }}>
        https://realbooks.in
      </Text>
    </View>
  );
};
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor:"white"
  },   
headerView: {
    width: "100%",
    height: 220,
    paddingTop: 70,
    backgroundColor: "#0070C3",
    paddingLeft: 15,
},
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 70,
    height: 70,
  },
});
 
export default CustomSidebarMenu;
