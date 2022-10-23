import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text , Image , StyleSheet} from 'react-native';
import Tabe from './tab';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Profile from '../screens/profile';
import Recived from '../screens/recived';
import Archive from '../screens/archive';
import financial from '../screens/financial';


const Drawer = createDrawerNavigator();
//تصویر و نام پروفایل
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
     <View style={styles.profileView}>
       <Image 
source={require('../assets/me.jpg')}
style={styles.imageProfile}  
  />
  <Text style = {styles.profileText} >
    علیرضا اکبری
    </Text>
    
     </View>
      <DrawerItemList {...props} />
      <Image source={require('../assets/logo.jpg')} style={styles.logo}>
        </Image>  
        
 
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

        <Drawer.Screen name="خانه"  component = {Tabe}  options={{  drawerActiveBackgroundColor:false,
        drawerActiveTintColor:'#499b01',
          headerStyle: {
          backgroundColor: '#499b01',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        drawerIcon : ({focused,size})=> (
          <Icon
           name="home" 
           size={size}
          color={focused ? '#a5cd39' : '#499b01' } 
            /> 
        ),
        }} 
          />

        <Drawer.Screen name="مشخصات فردی" component = {Profile}
         options={{  drawerActiveBackgroundColor:false, drawerActiveTintColor:'#499b01',
          headerStyle: { 
         backgroundColor: '#499b01',},
        headerTintColor: '#fff',

          drawerIcon : ({focused,size})=> (
          <Icon
           name="user" 
           size={size}
          color={focused ? '#a5cd39' : '#499b01' } 
            /> 
           ),
        }}
        />
        <Drawer.Screen name="اجناس امانی" component = {Recived} 
         options={{ drawerActiveBackgroundColor:false, drawerActiveTintColor:'#499b01',
          headerStyle: {
           backgroundColor: '#499b01',},
        headerTintColor: '#fff',
  
          drawerIcon : ({focused,size})=> (
          <Icon
           name="barcode" 
           size={size}
            color={focused ? '#a5cd39' : '#499b01' } 
            /> 
           ),
        }}
        />
        <Drawer.Screen name="بایگانی" component = {Archive} 
         options={{ drawerActiveBackgroundColor:false, drawerActiveTintColor:'#499b01',
          headerStyle: {
           backgroundColor: '#499b01',},
        headerTintColor: '#fff',
  
          drawerIcon : ({focused,size})=> (
          <Icon
           name="archive" 
           size={size}
            color={focused ? '#a5cd39' : '#499b01' } 
            /> 
           ),
        }}
        />
        <Drawer.Screen name="حسابداری مالی" component = {financial}
         options={{ drawerActiveBackgroundColor:false, drawerActiveTintColor:'#499b01',
          headerStyle: {
           backgroundColor: '#499b01',},
        headerTintColor: '#fff',
  
          drawerIcon : ({focused,size})=> (
          <Icon
           name="credit-card" 
           size={size}
            color={focused ? '#a5cd39' : '#499b01' } 
            /> 
           ),
        }}
        />

      </Drawer.Navigator>
 );
}


//استایل دهی به المنت ها
const styles = StyleSheet.create ({
  logo:{   width: '94%',    height: 222,     marginTop: 20,     marginHorizontal:'3%',
  },

 profileView : {flex : 1  , justifyContent:'space-between' , flexDirection:'row',
 borderBottomWidth:0.27 ,  borderColor:'#499b01'  , paddingBottom:17, marginBottom:7,
},

 profileText:{  alignSelf:'center' , marginRight:22, backgroundColor:'#499b01' , paddingVertical:4,
 paddingHorizontal:21,    borderRadius:7  , fontWeight:'bold' , color:'#fff'
 
 },

 imageProfile:{
width:77 , height:77 , borderRadius:100 , marginLeft:13  ,   borderWidth:2  , borderColor:'#499b01'
},

});
