import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import Image from 'react-native-scalable-image';
import {useNavigation} from '@react-navigation/native';
import i18n from 'i18n-js';

// Helpers
import * as Images from 'helpers/images';

// Hooks
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Item({date, data}) {
  const navigation = useNavigation();

  function getBool(e) {
    if (e.discriminator === 'Withdrawal') {
      return false;
    }
    return true;
  }

  return (
    <View style={base.w1}>
      <Text style={base.t1}>{date}</Text>
      {data.map((e, i) => {
        function onPress() {
          navigation.navigate('Transaction', {props: e});
        }

        return (
          <View key={i}>
            <TouchableOpacity style={base.w2} onPress={onPress}>
              <View style={base.w3}>
                <Image
                  source={
                    getBool(e) ? Images.transactionDown : Images.transactionUp
                  }
                  width={dw(15.6)}
                />
              </View>
              <View style={base.w4}>
                <Text style={base.t2}>{e.accountMask || e.accountName}</Text>
                <Text style={base.t3}>
                  {getBool(e) ? i18n.t('t72') : i18n.t('t73')} {i18n.t('t77')}{' '}
                  {moment(e.createdAt).format('HH:mm')}
                </Text>
              </View>
              <View style={base.w5}>
                <Text style={[base.t4]}>
                  {getBool(e) ? '+' : '-'}
                  {e.amount} {e.node}
                </Text>
                {/* <Text style={[base.t4, base.t6]}>
                  {getBool(e) ? '+' : '-'}$0
                </Text> */}
              </View>
            </TouchableOpacity>
            {i !== data.length - 1 && <View style={base.w6} />}
          </View>
        );
      })}
    </View>
  );
}
