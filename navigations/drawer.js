import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text , Image , StyleSheet} from 'react-native';
import Upload from '../screens/upload';
import Chat from '../screens/chat';
import Salary from '../screens/salary';
import Tabe from './tab';
import  Icon  from 'react-native-vector-icons/FontAwesome';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
//تصویر و نام پروفایل
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
     <View style={styles.profileView}>
       <Image 
source={require('../assets/me.jpg')}
style={{width:77 , height:77 , borderRadius:100 }}  
  />
  <Text style = {styles.profileText} >
    Alireza</Text>
     </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
//ادامه نویگیتور
export default function DrawerNav () {
  return (

    
 <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen name=" " component = {Tabe} />
        <Drawer.Screen name="مشخصات فردی" component = {Upload} 
         options={{
          drawerIcon : ({focused,size})=> (
          <Icon
           name="home" 
           size={size}
            color={focused ? '#45b5c9' : '#33b5c9' } 
            /> 
           ),
        }}
        />
        <Drawer.Screen name="اجناس امانی" component = {Chat} 
         options={{
          drawerIcon : ({focused,size})=> (
          <Icon
           name="barcode" 
           size={size}
            color={focused ? '#45b5c9' : '#33b5c9' } 
            /> 
           ),
        }}
        />
        <Drawer.Screen name="بایگانی" component = {Salary} 
         options={{
          drawerIcon : ({focused,size})=> (
          <Icon
           name="file-archive-o" 
           size={size}
            color={focused ? '#45b5c9' : '#33b5c9' } 
            /> 
           ),
        }}
        />
        <Drawer.Screen name="حسابداری مالی" component = {Salary}
         options={{
          drawerIcon : ({focused,size})=> (
          <Icon
           name="credit-card" 
           size={size}
            color={focused ? '#45b5c9' : '#9f45c9' } 
            /> 
           ),
        }}
        />

      </Drawer.Navigator>
 );
}


//استایل دهی به المنت ها
const styles = StyleSheet.create ({
 profileText:{ marginVertical: 10 ,marginLeft:-12,padding:5 ,borderRadius:33 , backgroundColor:'lightblue', textAlign:'center'
 },
 profileView : {flex : 1  ,marginLeft:12, justifyContent:'center'}
});