import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function CamScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`IMEI ${data} اسکن شد`);
  };

  if (hasPermission === null) {
    return <Text>اجازه دسترسی به دوربین می دهید</Text>;
  }
  if (hasPermission === false) {
    return <Text>دسترسی صادر نشده</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner 
       barCodeScannerSettings={{ 
    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
  }} 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'اسکن مجدد'} color={'#499b01'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

