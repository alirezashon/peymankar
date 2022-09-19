import { View , TouchableOpacity} from "react-native";
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
padding:12,
paddingVertical:13
}}> 
<Ionicons name="md-chatbubble-ellipses-outline" size={24} color="#0e7a4d" />    
 <TouchableOpacity
         onPress={()=> navigation.navigate('اسکنر')}>
                   <AntDesign name="scan1" size={24} color="#0e7a4d" style={{marginLeft:13}}  /> 
        </TouchableOpacity>
        </View>
   );
}

