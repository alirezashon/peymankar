import { View, ScrollView, Text ,TouchableOpacity , Image , StyleSheet} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Recived () {
  return (
   <ScrollView style={styles.profileView}>
 <View style={styles.imageBox}>
     <TouchableOpacity style={{flexDirection:'row-reverse'}}>
      <Image 
source={require('../assets/me.jpg')}
style={styles.imageProfile}  />
<Text style = {styles.profileText} >
سیزده ماه همکاری
    </Text>
     </TouchableOpacity>
  </View>
 
    <View style={styles.recivedBox}>
    <View>
      
{/*بهتره که فلکس دایرکشن ستونی استفاده کنی به جای الان که سطری نوشتی */}
      <View style={styles.fieldBox}>
        
        <Text style={styles.DataLabel}>
  مجموع کارکرد :      
        </Text>
        <Text style={styles.DataText}>
۹۹۵،۴۰۰،۰۰۰
        </Text>

          <Text style={styles.DataLabel}>
 تاریخ :      
        </Text>
        <Text style={styles.DataText}>
۳ / ۷ /۱۴۰۱
        </Text>
      </View>

       <View style={styles.fieldBox}>
     <Text style={styles.DataLabel}>
دریافتی :
        </Text>
        <Text style={styles.DataText}>
۹۹۰،۰۰۰،۰۰۰ ريال
        </Text>

          <Text style={styles.DataLabel}>
 الباقی :      
        </Text>
        <Text style={styles.DataText}>
۵،۴۰۰،۰۰۰ ريال        </Text>
      </View>
    </View>
  </View>

 <TouchableOpacity style = {styles.profileButtons}>
      <Text style={{color:'#fff' ,  fontWeight:'bold'}}>
لیست پرداخت ها
    </Text>
<FontAwesome name="list-alt" size={26} color="white" />
     </TouchableOpacity>

 <TouchableOpacity style = {styles.profileButtons}>
      <Text style={{color:'#fff' ,  fontWeight:'bold'}}>
درخواست برداشت
    </Text>
    <FontAwesome5 name="money-check" size={22} color="white" />
     </TouchableOpacity>


    </ScrollView>
    );
  }


  const styles = StyleSheet.create ({

profileView:{   borderColor:'darkgreen' ,  borderWidth:1 ,    borderRadius:7 ,
    marginHorizontal: 7 ,  marginVertical: 13 , opacity:0.9 , elevation:99
},

recivedBox:{   flexDirection:'row',     justifyContent:'space-between' ,  
    },

imageBox:{ flexDirection:'row-reverse' , marginVertical:14 , alignItems:'center' ,
    justifyContent:'space-between',
},

imageProfile:{ width:99 ,        height:99 ,       borderRadius:57 ,       borderWidth:3,
    borderColor:'#b6c0b6'   , marginHorizontal:18    
},

 profileText:{  alignSelf:'center' , marginRight:22, backgroundColor:'#253025' , paddingVertical:11,
    paddingHorizontal:22,    borderRadius:7  , fontWeight:'bold' , color:'#fff' , borderWidth:3,
    borderColor:'#b6c0b6', opacity:0.7
 },

    fieldBox:{flexDirection:'row-reverse' , marginHorizontal:13 , marginVertical:7  ,  
   },
    
   recivedImg:{ width: '27%',    height: 100,      marginHorizontal:'2%', marginVertical:7,
         borderRadius:15
    },

    DataLabel:{ marginRight:12 , backgroundColor:'#a5cd39' , padding:3 , borderRadius:7 , marginLeft:16 ,
   borderWidth:1, borderColor:'#fff'
  },

DataText:{ backgroundColor:'#499b01' , padding:2 , borderRadius:7 ,   borderWidth:1, borderColor:'#fff'
  
  },

profileButtons:{ backgroundColor:'#253025' , paddingVertical:11,  flexDirection:'row-reverse',
    justifyContent:'space-between',     borderRadius:7  , fontWeight:'bold' , color:'#fff' ,
     borderWidth:3,   borderColor:'#b6c0b6', opacity:0.7  , width:'100%' , paddingHorizontal:22 ,
     marginTop:22, },

  });












