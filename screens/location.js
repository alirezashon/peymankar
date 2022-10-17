
import MapView from 'react-native-maps';
import { StyleSheet, Alert, View, Dimensions } from 'react-native';
import React ,{ useState, useEffect } from 'react';
import * as Clipboard from 'expo-clipboard';
import * as Location from 'expo-location';

export default function Locations() {
    const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const {coords :{latitude,longitude}} = await Location.getCurrentPositionAsync();
      setLocation({latitude,longitude});
    })();
  }, []);

  let text = 'صبر کنید...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    lat = text.slice(12,22);
    long = text.slice(35,45);
    console.log(location);
    Alert.alert(' موقعیت جغرافیایی شما ', ` ${lat}   ${long}`, [
      {
        text: 'کپی',
        onPress:() => Clipboard.setStringAsync(lat +'\t'+ long),
        style: 'destructive',
      },
    ]);
  }



  return (
    <View style={styles.container}>
      <MapView style={styles.map}   initialRegion={{
      latitude: 35.7431256,
      longitude: 51.5624021,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
