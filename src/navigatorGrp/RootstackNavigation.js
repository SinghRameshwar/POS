
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SaleScreen } from '../salescreen/ComponentContainer/SaleScreen';
import { InsertItemInStock } from '../stockscreen/component/InsertItemInStock';

const Stack  = createNativeStackNavigator();

export default RootstackNavigation = () =>{


    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName = "login">
            <Stack.Screen name="login" component={SaleScreen} options={{ headerShown: false }} />
            <Stack.Screen name="compslt" component={InsertItemInStock} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      );

}