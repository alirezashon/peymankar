import { View , StyleSheet ,TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



 export default function UseScanner() {
  const navigation = useNavigation();

   return(
<View 
style={{flexDirection:'row' , 
justifyContent:'flex-end',
alignItems:"center",
justifyContent:'space-around',
backgroundColor:'#fff',
padding:12,
paddingVertical:13
}}> 
<Ionicons name="md-chatbubble-ellipses-outline" size={24} color="#fff" style={styles.icons} />    
 <TouchableOpacity
         onPress={()=> navigation.navigate('اسکنر')}>
                   <AntDesign name="scan1" size={24} color="#fff" style={styles.icons}  /> 
        </TouchableOpacity>
        </View>
   );
}
const styles = StyleSheet.create ({
icons:{marginLeft:13 , borderWidth:2,paddingHorizontal:7 , paddingVertical:7 ,  borderRadius:15 ,
backgroundColor:'#a5cd39' ,    borderColor:'#499b01' , textAlign:'center' , justifyContent:'center'
},

});
