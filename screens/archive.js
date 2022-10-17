import { View, ScrollView, Text  , StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Archive () {
  return (
   <ScrollView style={styles.profileView}>

 <TouchableOpacity>
<View style={styles.fieldBox}>
        <Text style={styles.DataLabelDate}>
 1401       
        </Text>
          <Text style={styles.DataLabelText}>
لیست تیکت های بسته شده        </Text>
      </View>
 </TouchableOpacity>
      
 <TouchableOpacity>
<View style={styles.fieldBox}>
        <Text style={styles.DataLabelDate}>
 1400       
        </Text>
          <Text style={styles.DataLabelText}>
لیست تیکت های بسته شده        </Text>
      </View>
 </TouchableOpacity>

 <TouchableOpacity>
  <View style={styles.fieldBox}>
        <Text style={styles.DataLabelDate}>
 1399       
        </Text>
          <Text style={styles.DataLabelText}>
لیست تیکت های بسته شده        </Text>
      </View>
 </TouchableOpacity>
     

    </ScrollView>
    );
  }


  const styles = StyleSheet.create ({

    fieldBox:{flexDirection:'row' , marginHorizontal:3 , marginTop:25  ,  justifyContent:'space-between', 
    borderColor:'green' ,  borderWidth:1 ,  borderRadius:7 ,  paddingVertical:19,  paddingHorizontal:9,
 
  },

  DataLabelDate:{  backgroundColor:'#9cf850' , padding:9 , borderRadius:7 , 
  },

  DataLabelText:{ backgroundColor:'#dce744' , padding:9 , borderRadius:7, alignSelf:'flex-end'
  },

  DataText:{ backgroundColor:'#e7f850'
  },

  });












