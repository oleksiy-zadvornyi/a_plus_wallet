import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {useNavigation} from '@react-navigation/native';

// Helpers
import * as Images from 'helpers/images';

// Hooks
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Item() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('CryptoWallet');
  };

  return (
    <TouchableOpacity style={base.w1} onPress={onPress}>
      <Image source={Images.btc} width={dw(34)} />
      <View style={base.w2}>
        <Text style={base.t1}>Bitcoin (legal)</Text>
        <Text style={base.t2}>Активен</Text>
      </View>
      <View style={base.w3}>
        <Text style={base.t3}>0.09625 BTC</Text>
        <Text style={[base.t3, base.t4]}>$1,087.18</Text>
      </View>
    </TouchableOpacity>
  );
}
