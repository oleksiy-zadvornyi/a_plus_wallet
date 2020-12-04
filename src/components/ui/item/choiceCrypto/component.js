import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {useNavigation} from '@react-navigation/native';

// Helpers
import * as Images from 'helpers/images';

// Hooks
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Item(props) {
  const {currencyCode, currencyFulName, node} = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('CryptoName', {props});
  };

  return (
    <TouchableOpacity style={base.w1} onPress={onPress}>
      <Image source={Images[node]} width={dw(34)} />
      <Text style={base.t1}>
        {currencyFulName} ({currencyCode})
      </Text>
      <Image source={Images.plusOutlined} width={dw(30)} />
    </TouchableOpacity>
  );
}
