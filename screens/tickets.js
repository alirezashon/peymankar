import { View, Linking,ScrollView, Text  , StyleSheet, Button ,} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';

export default function Ticket () {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('IN-140104016817');};


  return (
   <ScrollView>

    <View style={styles.ticketBox}>
<Text style={styles.ticket}>
  <Button title='IN-140104016817' color={'#09457c'} onPress={copyToClipboard}></Button>{'\n'}
Service Type:VPN {'\n'}
Bandwidth:256 Kbps{'\n'}
Subscriber ID:Day-atm-1068{'\n'}
Subscriber address:خ شریعتی، خ پل رومی، خ شریفی، نبش افسر، خ لطیفی، نبش پارسا، پ12{'\n'}
Function:ATM{'\n'}
Branch Code:atm-1068{'\n'}
Branch Name:مدیریت ستاد بحران-1068{'\n'}
Province:Tehran{'\n'}
City:Tehran{'\n'}
Phone: {'\n'}
{'\n'} <Button title='02128931009' color={'#dd1111'}      onPress={() => {Linking.openURL('tel:02128931009');}}  >
</Button>{'\n'}
Installation Cordinator Name:نخعی{'\n'}
Installation Cordinator Phone:{'\n'} {'\n'} 
<Button title='09128931777' color={'#dd1111'}  onPress={() => {Linking.openURL('tel:09128931777');}}>
</Button>{'\n'}
Customer:Day{'\n'}
Agent Name : Tiraje {'\n'}
IP WAN:172.25.26.164{'\n'}
</Text>
    </View>
<View style={styles.createChat}>
  <Text style={{color:'#ffffff'}}>ایجاد گفتگو</Text>
<Ionicons name="md-chatbubble-ellipses-outline" size={26} color="#ffffff" />    
</View>






     <View style={styles.ticketBox}>
<Text style={styles.ticket}>
  <Button title='T-140102318632' color={'#07961f'} onPress={() => {Clipboard.setStringAsync('T-140102318632');}}></Button>{'\n'}
قطعی و وصلی{'\n'}
FDD{'\n'}
Service Type:VPN{'\n'}
Service category:L3{'\n'}
DEVICE MODEL:Desktop Hauwei612{'\n'}
Subscriber ID:Sepah_Video-ModiriatNahie1Alvand{'\n'}
Branch Code:ModiriatNahie1Alvand{'\n'}
Branch Name:مدیریت امور ناحیه 1 ساختمان الوند{'\n'}
Customer:Sepah_Video{'\n'}
Service Package:8 Mbps{'\n'}
Subscriber address:میدان آرژانتین، خیابان الوند، نبش کوچه سی و سوم، پلاک 54، ساختمان الوند بانک سپه - مدیریت امور ناحیه 1{'\n'}
Province:Tehran{'\n'}
City:Tehran{'\n'}
IP WAN:172.25.63.41{'\n'}
ICCID :899843032002077616{'\n'}
CPE IMEI:867889040183046{'\n'}
SIM IMSI:432444320077616{'\n'}

موسوی پور{'\n'}
</Text>
    </View>
   
   <View style={styles.createChat}>
  <Text style={{color:'#ffffff'}}>ایجاد گفتگو</Text>
<Ionicons name="md-chatbubble-ellipses-outline" size={26} color="#ffffff" />    
</View>

    </ScrollView>
    );
  }


  const styles = StyleSheet.create ({
    ticketBox:{  borderColor:'darkgreen' ,  borderWidth:1 ,flexDirection:'row',
    justifyContent:'space-between' , borderRadius:7 ,  marginHorizontal: 2 ,  marginVertical: 13 ,
    paddingHorizontal:13 , paddingVertical:44 , backgroundColor:'rgba(44, 97, 44, 0.1)',
    },

    ticket:{ lineHeight:24
    },

    createChat:{backgroundColor:'#07961f'  ,flexDirection:'row-reverse'  , borderRadius:15 ,
    justifyContent:'space-between' , width:'94%'  , marginHorizontal:'3%'  , paddingHorizontal :15 ,
    paddingVertical:7,  marginTop:-72 , marginBottom:33 , borderWidth:3 , borderColor:'#ffff'
  
  },
    

    
  
  });











