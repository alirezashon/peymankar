import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './navigations/drawer';
import CamScanner from './componentes/camScanner';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { color } from 'react-native-reanimated';


const Stack = createNativeStackNavigator();




export default function App () {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator  >
  <Stack.Screen 
   options={{ headerShown: false }}
   name='home' component={DrawerNav}/>
  <Stack.Screen name='اسکنر' component={CamScanner}  options={{ headerStyle: { 
         backgroundColor: '#d0ec2f',},        headerTintColor: '#f56918'
}}/>
</Stack.Navigator>
    </NavigationContainer>

  );
}
