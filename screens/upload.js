import React, {  useRef, useMemo , useState} from "react";
import { StyleSheet, View , SafeAreaView, Text, TouchableOpacity , Image } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';


export default function Upload () {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["4.5%", "15%", "30%","50%", "70%", "90%"], []);

  const Create = () =>{
    <View style={styles.folderView}>
 <Image source={require('../assets/me.jpg')} style={styles.imageFolder} >
    </Image>  
            <Text style={styles.folderText}>نصب اوتدور</Text>
     </View>
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar /> 
            <LinearGradient colors={['rgba(52, 138, 2, 0.5)', 'rgba(52, 138, 2, 0.3)', 'rgba(44, 97, 44, 0.1)']} style={{flex:1 , width:'100%'}}>

     <View style={styles.folderView}>
 <Image source={require('../assets/money.jpg')} style={styles.imageFolder} >
    </Image>  
            <Text style={styles.folderText}>نصب اوتدور                                     ۲۵،۰۰۰،۰۰۰ ریال</Text>
     </View>
      <View style={styles.folderView}>
                    <Text style={styles.folderText}>نصب ایندور                                     ۲۲،۰۰۰،۰۰۰ ریال</Text>
 <Image source={require('../assets/money.jpg')} style={styles.imageFolder} >
    </Image>  
     </View>

        <View style={styles.folderView}>
 <Image source={require('../assets/money.jpg')} style={styles.imageFolder} >
    </Image>  
            <Text style={styles.folderText}>پشتیبانی اوتدور                               ۲۷،۰۰۰،۰۰۰ ریال</Text>
     </View>
      <View style={styles.folderView}>
                    <Text style={styles.folderText}>پشتیبانی ایندور                                ۱۹،۰۰۰،۰۰۰ ريال</Text>
 <Image source={require('../assets/money.jpg')} style={styles.imageFolder} >
    </Image>  
     </View>

</LinearGradient>




{/* تب کشویی پایین صفحه */}
     <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView contentContainerStyle={styles.bottomSheett}>
            <LinearGradient colors={['rgba(52, 138, 2, 0.5)', 'rgba(52, 138, 2, 0.3)', 'rgba(44, 97, 44, 0.1)']} style={{flex:1 , width:'100%'}}>

          <View style={styles.buttonsView}>
       <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButton}>نصب اوتدور</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButton}>نصب ایندور</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButton}>پشتیبانی ایندور</Text>
       </TouchableOpacity>
          </View>

          <View style={styles.buttonsView}>
       <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButton}>پشتیبانی اوتدور</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButton}>امکان سنجی</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButton}> جمع آوری</Text>
       </TouchableOpacity>
          </View>

           <View style={styles.buttonsView}>
       <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButton}>بازخرید</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButton}>پشتیبانی انبوه</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButton}> VIP</Text>
       </TouchableOpacity>
          </View>
      </LinearGradient>

        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

//استایل های صفحه
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  folderView:{
    flexDirection:'row',
   marginTop:7
  },

  imageFolder:{width: 66,   height: 66,    marginHorizontal:'0.7%',    borderRadius:50 ,
  borderWidth:3, borderColor:'rgba(52, 138, 2, 0.8)',
  },

  folderText:{   backgroundColor:'white',   color:'darkgreen', width:'77.77%',  borderRadius:13, 
   padding:7,  marginTop:'4%', height:38,
  },

  //استایل تب کشویی پایین صفحه
  bottomSheett: {
    backgroundColor: "#d9f8e3",     flex:1,paddingTop:25
  },
  
  buttonsView:{
    flexDirection:'row',
  },
  
  buttons:{     borderColor:'#fff'     ,borderWidth:3,   backgroundColor:'#07961f',     width:'26.8%', 
    borderRadius:13,    paddingHorizontal:4, paddingVertical:6,   margin:'3.5%',     height:38, opacity:0.9
  },
  
  textButton:{ textAlign:'center',   color:'#fff', 
  },
});
