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

export default function Item({date, data}) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Transaction');
  };

  return (
    <View style={base.w1}>
      <Text style={base.t1}>{date}</Text>
      {data.map((e, i) => {
        console.log(e);
        return (
          <View key={e}>
            <TouchableOpacity style={base.w2} onPress={onPress}>
              <View style={base.w3}>
                <Image
                  source={
                    e.discriminator === 'Withdrawal'
                      ? Images.transactionUp
                      : Images.transactionDown
                  }
                  width={dw(15.6)}
                />
              </View>
              <View style={base.w4}>
                <Text style={base.t2}>Bitcoin (legal)</Text>
                <Text style={base.t3}>
                  Получено в {moment(e.createdAt).format('HH:mm')}
                </Text>
              </View>
              <View style={base.w5}>
                <Text style={[base.t4]}>-0.09625 {e.node}</Text>
                <Text style={[base.t4, base.t6]}>+$1,087.18</Text>
              </View>
            </TouchableOpacity>
            {i !== data.length - 1 && <View style={base.w6} />}
          </View>
        );
      })}
    </View>
  );
}
