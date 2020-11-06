import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/send';
import ButtonQr from 'button/qr';
import Button from 'button';
import Input from 'input/send/step2';

// Style
import {base} from './style';

export default function Step2() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Step3');
  };

  return (
    <Wrap noScroll titleView={<Header step={2} title="Адрес получателя" />}>
      <ButtonQr />
      <View style={base.w1}>
        <View style={base.w2} />
        <Text style={base.t1}>или</Text>
        <View style={base.w2} />
      </View>
      <Input placeholder="Введите адрес получателя" />
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
