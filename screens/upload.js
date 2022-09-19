
import React, {  useRef, useMemo } from "react";
import { StyleSheet, View , SafeAreaView, Text, TouchableOpacity , Image } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";


export default function Upload () {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["4.5%", "15%", "30%","50%", "70%", "90%"], []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar /> 
     <View style={styles.folderView}>
 <Image source={require('../assets/me.jpg')} style={styles.imageFolder} >
    </Image>  
            <Text style={styles.folderText}>نصب اوتدور</Text>
     </View>


{/* تب کشویی پایین صفحه */}
     <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>

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

        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:'lightblue'
  },
  folderView:{
    flexDirection:'row',
   marginTop:7
  },
  imageFolder:{
width: 66,
    height: 66,
    marginLeft:'3%',
    borderRadius:50
  },
  folderText:{
backgroundColor:'#07b16a', 
width:'77.77%',
borderRadius:13,
padding:7,
marginTop:'4%',
height:38,
  },

  //استایل هی تب کشویی پایین صفحه
  contentContainer: {
    backgroundColor: "#d9f8e3",
    flex:1,paddingTop:25
  },
  buttonsView:{
    flexDirection:'row',
  },
  buttons:{
backgroundColor:'#07b16a', 
width:'26.3%',
borderRadius:13,
padding:7,
margin:'3.5%',
height:38,
  },
  textButton:{
textAlign:'center',
color:'white'
  },
});

