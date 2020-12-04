import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Modal from 'react-native-modal';
import {BarCodeScanner} from 'expo-barcode-scanner';

// Style
import {base} from './style';

export default function Qr({isVisible, onScan, onPressClose}) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function renderScanner() {
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        onBarCodeScanned={onScan}
        style={base.flex}
      />
    );
  }

  return (
    <Modal
      style={base.w1}
      isVisible={isVisible}
      swipeDirection="right"
      onSwipeComplete={onPressClose}
      onBackButtonPress={onPressClose}
      onBackdropPress={onPressClose}>
      {renderScanner()}
    </Modal>
  );
}
