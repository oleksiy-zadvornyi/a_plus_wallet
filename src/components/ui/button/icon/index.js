import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Button({style, color, title, icon, onPress}) {
  return (
    <TouchableOpacity style={[base.w1, style]} onPress={onPress}>
      {/* <View style={base.flex}> */}
      <Image style={base.w2} source={icon} width={title ? dw(20) : dw(32)} />
      {/* </View> */}
      <Text style={base.t1}>{title}</Text>
      {/* <View style={base.flex} /> */}
    </TouchableOpacity>
  );
}
