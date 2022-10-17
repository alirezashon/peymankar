import { TouchableOpacity,View, ScrollView, Text , Image , StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SendNotification from '../componentes/notification';

export default function Profile () {
  return (
   <ScrollView style={styles.profileView}>
<View style={styles.profileViews}>
  
  <View style={styles.imageBox}>
     <TouchableOpacity>
      <Image 
source={require('../assets/me.jpg')}
style={styles.imageProfile}  />

     </TouchableOpacity>
 <Text style = {styles.profileText} >
    علیرضا اکبری
    </Text>
  </View>
 
 <TouchableOpacity style={styles.fieldBox}>
<Text style={styles.fieldText}>مجوز ها</Text>
<FontAwesome name="drivers-license" size={34} color="#a5cd39" />
</TouchableOpacity>

<TouchableOpacity style={styles.fieldBox}>
<Text style={styles.fieldText}>ویرایش مشخصات فردی</Text>
  <Ionicons name="person-circle" size={34} color="#a5cd39" />
</TouchableOpacity>


<TouchableOpacity style={styles.fieldBox}>
<Text style={styles.fieldText}>تیکت ها ی موفق</Text>
<FontAwesome name="check-circle" size={34} color="#a5cd39" />
</TouchableOpacity>

<TouchableOpacity style={styles.fieldBox}>
<Text style={styles.fieldText}>پرسش های متداول</Text>
<FontAwesome name="question-circle" size={34} color="#a5cd39" />
</TouchableOpacity>

<SendNotification/>
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
 backgroundColor:'rgba(8, 133, 8, 0.1)'
},

fieldText:{ fontSize:17 , color:'#034403' , fontWeight:'bold', 
}

});










