
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OTPLogin from "../Login/OTPLogin";
import NavigationDrawer from "./NavigationDrawer";

const Stack  = createNativeStackNavigator();

export default RootstackNavigation = ({loginType, navigation}) =>{

    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName = {loginType}>
            <Stack.Screen name="login" component={OTPLogin} options={{ headerShown: false }} />
            <Stack.Screen name="NavigationDrawer" component={NavigationDrawer} options={{ headerShown: false }} initialParams={{ navig: navigation }} />
          </Stack.Navigator>
        </NavigationContainer>
      );

}