import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './navigations/drawer';
import CamScanner from './componentes/camScanner';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();




export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
  <Stack.Screen 
   options={{ headerShown: false }}
   name='home' component={DrawerNav}/>
  <Stack.Screen name='اسکنر' component={CamScanner} />
</Stack.Navigator>
    </NavigationContainer>

  );
}







