import { View, Text , Dimensions,  TouchableOpacity, ScrollView ,
StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Donut} from 'react-native-donut-chart';

import {
  PieChart,
} from "react-native-chart-kit";

export default function Chart(){
  const datas = [
    {
      value: 22,
      color: 'red',
    }, {
      value: 23,
      color: 'green',
    }, {
      value: 2,
      color: 'black',
    }, {
      value: 6,
      color: 'blue',
    },
  ]
  
  return(
   <ScrollView style={styles.profileView}>
{/*داده های چارت------ وقت نبود مرتبش کنم دیگه به بزرگی خودت ببخش علی جووون  :) م*/}

    <View>
<Donut data={datas}/>
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between', padding:3}}>
<Text style={{backgroundColor:'red', paddingVertical:7, width:66,textAlign:'center',marginLeft:12 ,borderRadius:66 , color:'#fff'}}>پشتیبانی</Text>
<Text style={{backgroundColor:'green', paddingVertical:7, width:66,textAlign:'center',marginLeft:12 ,borderRadius:66 , color:'#fff'}}>نصب</Text>
<Text style={{backgroundColor:'blue', paddingVertical:7, width:66,textAlign:'center',marginLeft:12 ,borderRadius:66 , color:'#fff'}}>جمع آوری</Text>
<Text style={{backgroundColor:'#000', paddingVertical:7, width:66,textAlign:'center',marginLeft:12 ,borderRadius:66 , color:'#fff'}}>امکان سنجی</Text>

</View>


{/*
   <PieChart
        data={[
         
          {
            name: 'T',
            population: 23,
            color: '#06bb15',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
           {
            name: 'RO',
            population: 6,
            color: '#a5cd39',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'IN',
            population: 22,
            color: '#eb8f39',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'SU',
            population: 2,
            color: '#0b95f1',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{ direction:'rtl',
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        direction='rtl'
        paddingLeft="15"
      />
      */}
</View>

      
  <View style={styles.profileViews}>
  
  <View style={styles.imageBox}>
      </View>
 
 <TouchableOpacity style={styles.fieldBox}>
<Text style={styles.fieldText}>۱- امیر</Text>
  <Ionicons name="person-circle" size={34} color="#fff" />
</TouchableOpacity>

<TouchableOpacity style={styles.fieldBox}>
<Text style={styles.fieldText}> ۲- علیرضا</Text>
  <Ionicons name="person-circle" size={34} color="#fff" />
</TouchableOpacity>


<TouchableOpacity style={styles.fieldBox}>
<Text style={styles.fieldText}>۳- محمد</Text>
  <Ionicons name="person-circle" size={34} color="#fff" />
</TouchableOpacity>

<TouchableOpacity style={styles.fieldBox}>
<Text style={styles.fieldText}>۴- حسین</Text>
  <Ionicons name="person-circle" size={34} color="#fff" />
</TouchableOpacity>


</View>
   </ScrollView>

     
    );
  }
 

  const styles = StyleSheet.create ({

profileViews:{    alignItems:'flex-end' , flex : 1  ,borderColor:'#a5cd39',  borderTopWidth:6, 
},

imageBox:{ flexDirection:'row-reverse' , marginVertical:14 , alignItems:'center'
},

 imageProfile:{ width:77 ,        height:77 ,       borderRadius:57 ,       borderWidth:3,
borderColor:'#499b01'   , marginHorizontal:33    
},


profileText:{  alignSelf:'center' , marginRight:22, backgroundColor:'#499b01' , paddingVertical:11,
 paddingHorizontal:55,    borderRadius:7  , fontWeight:'bold' , color:'#fff'
 },


fieldBox:{ flexDirection:'row-reverse' ,  justifyContent:'space-between', borderTopWidth:2, 
width:'100%'  ,    borderColor:'#499b01' , paddingVertical:13,  paddingHorizontal:17,
 backgroundColor:'rgba(13, 136, 85, 0.55)'
},

fieldText:{ fontSize:17 , color:'#034403' , fontWeight:'bold', 
}

});

