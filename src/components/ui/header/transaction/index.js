import React from 'react';
import {Text, View} from 'react-native';
import Image from 'react-native-scalable-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import i18n from 'i18n-js';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Header({discriminator, confirmations, amount, node}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  function getBool() {
    if (discriminator === 'Withdrawal') {
      return false;
    }
    return true;
  }

  return (
    <View style={[base.w1, {paddingTop: dw(8) + insets.top}]}>
      <View style={base.w2}>
        <View style={base.w3}>
          <Image
            source={Images.arrowLeft}
            width={dw(30)}
            onPress={navigation.goBack}
          />
        </View>
        <View style={base.w4}>
          <Text style={base.t1}>{i18n.t('t74')}</Text>
          <Text style={base.t2}>
            {getBool() ? i18n.t('t72') : i18n.t('t73')}
          </Text>
        </View>
        <View style={base.w3} />
      </View>
      <View style={base.w5}>
        <Image
          source={
            discriminator === 'Withdrawal'
              ? Images.transactionUp
              : Images.transactionDown
          }
          width={dw(20)}
        />
      </View>
      <Text style={base.t3}>
        {getBool() ? '+' : '-'}
        {amount} {node}
      </Text>
      {/* <Text style={base.t4}>-$1,087.18</Text> */}
      <View style={base.w6}>
        <View style={base.w7} />
        <Text style={base.t5}>Confirmed ({confirmations})</Text>
      </View>
    </View>
  );
}
