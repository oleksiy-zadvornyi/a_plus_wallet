import React from 'react';
import {Text, View} from 'react-native';
import Image from 'react-native-scalable-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[base.w1, {paddingTop: dw(8) + insets.top}]}>
      <View style={base.w2}>
        <View style={base.w3}>
          <Image source={Images.arrowLeft} width={dw(30)} />
        </View>
        <View style={base.w4}>
          <Text style={base.t1}>Детали транзакции</Text>
          <Text style={base.t2}>Отправка</Text>
        </View>
        <View style={base.w3} />
      </View>
      <View style={base.w5}>
        <Image source={Images.transactionUp} width={dw(20)} />
      </View>
      <Text style={base.t3}>-0.09625 BTC</Text>
      <Text style={base.t4}>-$1,087.18</Text>
      <View style={base.w6}>
        <View style={base.w7} />
        <Text style={base.t5}>Confirmed (851)</Text>
      </View>
    </View>
  );
}
