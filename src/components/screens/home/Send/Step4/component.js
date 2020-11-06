import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import {useNavigation} from '@react-navigation/native';
import dw from 'hooks/useDesignWidth';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/send';
import Button from 'button';

// Helpers
import * as Images from 'helpers/images';

// Style
import {base} from './style';

export default function Step4() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Step5');
  };

  return (
    <Wrap noScroll titleView={<Header step={4} title="Итог" />}>
      <View style={base.w1}>
        <View style={base.w2}>
          <View style={base.w3}>
            <Image source={Images.wallet} width={dw(20)} />
          </View>
          <View style={base.w4}>
            <Text style={base.t1}>С кошелька</Text>
            <View style={base.w2}>
              <Image source={Images.btc} width={dw(20)} />
              <Text style={base.t2}>Bitcoin (legal)</Text>
            </View>
          </View>
        </View>
        <View style={base.w6} />
        <View style={base.w2}>
          <View style={base.w3}>
            <Image source={Images.qrCode} width={dw(20)} />
          </View>
          <View style={base.w4}>
            <Text style={base.t1}>На кошелек</Text>
            <View style={base.w2}>
              <Text style={base.t3}>32XrZRLqeu4GyziSxjF9UamNJtxCeHwAdZ</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={base.w7} />
      <View style={base.w8}>
        <View style={base.w2}>
          <Text style={base.t4}>Сумма</Text>
          <View style={base.w9}>
            <Text style={base.t5}>0.09625 BTC</Text>
            <Text style={base.t6}>$1,087.18</Text>
          </View>
        </View>
      </View>
      <View style={base.w8}>
        <View style={base.w5}>
          <Text style={base.t4}>Комиссия сети</Text>
          <View style={base.w9}>
            <Text style={base.t5}>0.09625 BTC</Text>
            <Text style={base.t7}>Редактировать</Text>
          </View>
        </View>
      </View>
      <View style={base.w7} />
      <View style={base.w8}>
        <View style={base.w2}>
          <Text style={base.t4}>Всего</Text>
          <View style={base.w9}>
            <Text style={base.t5}>0.09625 BTC</Text>
            <Text style={base.t6}>$1,087.18</Text>
          </View>
        </View>
      </View>
      <View style={base.flex} />
      <Button style={base.w10} title="Продолжить" onPress={onPress} />
    </Wrap>
  );
}
