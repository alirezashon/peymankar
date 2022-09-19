import { useState } from "react";
import { SafeAreaView ,View, Text,StyleSheet, StatusBar , Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import UseScanner from "../componentes/useScanner";



 export default function HomeScreen({camScanner}) {
  const [text,setText] = useState('');
  const navigation = useNavigation();

   return(
  <SafeAreaView style={styles.container}>
  <StatusBar/>

      <LinearGradient
        colors={['#f2fff7', '#d3fae2', '#ebfcf1']}
        style={{flex:1 , width:'100%'}}>
           
<UseScanner/>
<ScrollView>
  
 <Image source={require('../assets/logo.jpg')} style={{
              width: '94%',
              height: 222,
              marginTop: 40,
              marginHorizontal:'3%',
            borderRadius:50
            }}></Image>  
        
          

</ScrollView>
      </LinearGradient>
</SafeAreaView>
    ); 
}




//استایل دهی به المنت ها
const styles = StyleSheet.create ({
 container:{ flex: 1,
  alignItems:'center',
  backgroundColor:'#7e3abd',
 },
linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});



