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

export default function Item(props) {
  const {accountName, maskName, balance, isActive, eqvBalance, node} = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Portfolio', {props});
  };

  return (
    <TouchableOpacity style={base.w1} onPress={onPress}>
      <Image source={Images[node]} width={dw(34)} />
      <View style={base.w2}>
        <Text style={base.t1}>{maskName || accountName}</Text>
        <Text style={base.t2}>{isActive ? 'Активен' : 'Не активен'}</Text>
      </View>
      <View style={base.w3}>
        <Text style={base.t3}>
          {balance} {node}
        </Text>
        <Text style={[base.t3, base.t4]}>
          ${eqvBalance.find((e) => e.currencieCode === 'USD').balance}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
