import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import dw from 'hooks/useDesignWidth';

// Helpers
import * as Images from 'helpers/images';

// Style
import {base} from './style';

export default function Button({onPress}) {
  return (
    <TouchableOpacity style={base.w1} onPress={onPress}>
      <View style={base.flex}>
        <Image source={Images.qrCode} width={dw(32)} />
      </View>
      <Text style={base.t1}>Сканировать QR код</Text>
      <View style={base.flex} />
    </TouchableOpacity>
  );
}
