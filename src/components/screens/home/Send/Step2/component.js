import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import i18n from 'i18n-js';

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
      showToast(i18n.t('t37'));
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
    <Wrap titleView={<Header step={2} title={i18n.t('t38')} />}>
      <ButtonQr onPress={onPressQrCode} />
      <ModalQr isVisible={show} onScan={onScan} onPressClose={onPressClose} />
      <View style={base.w1}>
        <View style={base.w2} />
        <Text style={base.t1}>{i18n.t('t39')}</Text>
        <View style={base.w2} />
      </View>
      <Input ref={refAddress} value={address} placeholder={i18n.t('t40')} />
      <View style={base.flex} />
      <Text style={base.t2}>Обратите внимание!</Text>
      <View style={base.w4}>
        <Text style={base.t3}>
          Вы совершаете вывод средств. В случае отправки средств по ошибочному
          адресу, они никогда не будут возмещены вам обратно. Внимательно
          проверяйте адрес получателя перед отправкой.
        </Text>
      </View>
      <View style={base.flex} />
      <Button
        style={base.w3}
        title={i18n.t('t41')}
        color="#009F06"
        onPress={onPress}
      />
    </Wrap>
  );
}
