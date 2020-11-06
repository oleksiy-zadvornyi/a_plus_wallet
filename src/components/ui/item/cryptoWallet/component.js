import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
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

  const onPressSend = () => {
    navigation.navigate('Transaction');
  };
  const onPressReceive = () => {};

  return (
    <View style={base.w1}>
      <Text style={base.t1}>{moment().format('D MMMM, YYYY')}</Text>
      <TouchableOpacity style={base.w2} onPress={onPressSend}>
        <View style={base.w3}>
          <Image source={Images.transactionUp} width={dw(15.6)} />
        </View>
        <View style={base.w4}>
          <Text style={base.t2}>Bitcoin (legal)</Text>
          <Text style={base.t3}>Получено в 9:24 PM</Text>
        </View>
        <View style={base.w5}>
          <Text style={[base.t4]}>-0.09625 BTC</Text>
          <Text style={[base.t4, base.t6]}>+$1,087.18</Text>
        </View>
      </TouchableOpacity>

      <View style={base.w6} />

      <TouchableOpacity style={base.w2} onPress={onPressReceive}>
        <View style={base.w3}>
          <Image source={Images.transactionDown} width={dw(15.6)} />
        </View>
        <View style={base.w4}>
          <Text style={base.t2}>Bitcoin (legal)</Text>
          <Text style={base.t3}>Получено в 9:24 PM</Text>
        </View>
        <View style={base.w5}>
          <Text style={[base.t4, base.t5]}>-0.09625 BTC</Text>
          <Text style={[base.t4, base.t6]}>+$1,087.18</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
