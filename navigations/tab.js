import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/home';
import Upload from '../screens/upload';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreenA() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<AntDesign name="barschart" size={24} color="black" /> 
   </View>
  );
}

function SettingsScreenA() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Tabe() {
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel : false,        
          headerShown:false
      }}>
      
        <Tab.Screen
         options={{ 
          tabBarIcon:() => <FontAwesome name="line-chart" size={24} color="#45b5c9" />
        }}
         name="نمودار" component={SettingsScreen} 
        />

        <Tab.Screen 
        options={{
          tabBarIcon:() => <MaterialIcons name="drive-folder-upload" size={24} color="#45b5c9" />
        }}
          name="فولدربندی" component={Upload} 
          />

           <Tab.Screen 
        options={{  lazy:true,
          tabBarIcon:() => <FontAwesome name="home" size={24} color="#45b5c9" />
        }}
          name="خانه" component={HomeScreen} 
          />
      
       <Tab.Screen
              options={{
          tabBarIcon:() => <FontAwesome5 name="map-marker-alt" size={24} color="#45b5c9" />
        }}
       name="مسیریاب" component={HomeScreenA} 
       />
      
        <Tab.Screen 
              options={{
          tabBarIcon:() => <MaterialCommunityIcons name="clipboard-check-multiple" size={24} color="#45b5c9" />
        }}
        name="چک ست" component={SettingsScreenA} 
        />
    
      </Tab.Navigator> 
  );
}