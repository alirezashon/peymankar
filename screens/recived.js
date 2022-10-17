import { View, ScrollView, Text , Image , StyleSheet} from 'react-native';

export default function Recived () {
  return (
   <ScrollView style={styles.profileView}>
        <View style={styles.recivedBox}>

<Image source={require('../assets/B612.png')} style={styles.recivedImg}/> 
    <View>
{/*بهتره که فلکس دایرکشن ستونی استفاده کنی به جای الان که سطری نوشتی */}
      <View style={styles.fieldBox}>
        <Text style={styles.DataLabel}>
 IMEI :      
        </Text>
        <Text style={styles.DataText}>
      8635056699417799   
        </Text>
      </View>

       <View style={styles.fieldBox}>
        <Text style={styles.DataLabel}>
model:
        </Text>
        <Text style={styles.DataText}>
B612
        </Text>
      </View>
  
   <View style={styles.fieldBox}>
        <Text style={styles.DataLabel}>
Date :       
       </Text>
        <Text style={styles.DataText}>
          ۳۰/۶/۱۴۰۱
        </Text>
      </View>
    </View>
  </View>


    <View style={styles.recivedBox}>

<Image source={require('../assets/B612.png')} style={styles.recivedImg}/> 
    <View>
{/*بهتره که فلکس دایرکشن ستونی استفاده کنی به جای الان که سطری نوشتی */}
      <View style={styles.fieldBox}>
        <Text style={styles.DataLabel}>
 IMEI :      
        </Text>
        <Text style={styles.DataText}>
      8633789199417799   
        </Text>
      </View>

       <View style={styles.fieldBox}>
        <Text style={styles.DataLabel}>
model:
        </Text>
        <Text style={styles.DataText}>
K3100
        </Text>
      </View>
  
   <View style={styles.fieldBox}>
        <Text style={styles.DataLabel}>
Date :       
       </Text>
        <Text style={styles.DataText}>
          ۳/۶/۱۴۰۱
        </Text>
      </View>
  

    </View>
  </View>

    </ScrollView>
    );
  }


  const styles = StyleSheet.create ({
    recivedBox:{  borderColor:'darkgreen' ,  borderWidth:1 ,flexDirection:'row',
    justifyContent:'space-between' , borderRadius:7 ,  marginHorizontal: 2 ,  marginVertical: 13 ,
    },

    fieldBox:{flexDirection:'row' , marginHorizontal:13 , marginVertical:7  ,  
   },
   
   recivedImg:{ width: '27%',    height: 100,      marginHorizontal:'2%', marginVertical:7,
    borderRadius:15
    },

    DataLabel:{ marginRight:23 , backgroundColor:'#9cf850' , padding:3 , borderRadius:7
  },

DataText:{ backgroundColor:'#e7f850'
},

  });












