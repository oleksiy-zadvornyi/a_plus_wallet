import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
// Components
import Wrap from 'base/Wrap';
import Header from 'header/send';
import ButtonQr from 'button/qr';
import Button from 'button';
import Input from 'input/send/step2';
import ModalQr from 'modal/qr';

// Style
import {base} from './style';

export default function Step2({showToast}) {
  const refAddress = useRef(null);
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState();
  const navigation = useNavigation();
  const route = useRoute();

  function onPress() {
    const input = refAddress.current.getValue();
    if (input.length === 0) {
      showToast('Введите адрес');
      return;
    }
    const props = route.params?.props ?? {};
    navigation.navigate('Step3', {
      props: {...props, address: address ? address : input},
    });
  }

  function onPressQrCode() {
    setShow(true);
  }

  function onPressClose() {
    setShow(false);
  }

  function onScan({data}) {
    setAddress(data);
    setShow(false);
  }

  return (
    <Wrap titleView={<Header step={2} title="Адрес получателя" />}>
      <ButtonQr onPress={onPressQrCode} />
      <ModalQr isVisible={show} onScan={onScan} onPressClose={onPressClose} />
      <View style={base.w1}>
        <View style={base.w2} />
        <Text style={base.t1}>или</Text>
        <View style={base.w2} />
      </View>
      <Input
        ref={refAddress}
        value={address}
        placeholder="Введите адрес получателя"
      />
      <View style={base.flex} />
      <Button
        style={base.w3}
        title="Продолжить"
        color="#009F06"
        // disabled={false}
        onPress={onPress}
      />
    </Wrap>
  );
}
