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
import Locations from '../screens/location';
import Chart from '../screens/chart';
import Ticket from '../screens/tickets';

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
          tabBarIcon:() => <MaterialCommunityIcons name="clipboard-check-multiple" size={24} color="#a5cd39" />
        }}
        name="چک ست" component={Ticket} 
        />
  
       <Tab.Screen
              options={{
          tabBarIcon:() => <FontAwesome5 name="map-marker-alt" size={24} color="#a5cd39" />
        }}
       name="مسیریاب" component={Locations} 
       />

       <Tab.Screen 
        options={{            tabBarIcon:() => <FontAwesome name="home" size={24} color="#a5cd39" />
        }}
          name="خانه " component={HomeScreen} 
          />   
      
        <Tab.Screen
        
         options={{   
          tabBarIcon:() => <FontAwesome name="line-chart" size={24} color="#a5cd39" />
        }}
         name="نمودار" component={Chart} 
        />

        <Tab.Screen 
        options={{
          tabBarIcon:() => <MaterialIcons name="drive-folder-upload" size={24} color="#a5cd39" />
        }}
          name="فولدربندی" component={Upload} 
          />

          
        
      </Tab.Navigator> 
  );
}
