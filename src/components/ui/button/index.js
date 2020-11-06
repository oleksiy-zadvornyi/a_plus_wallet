import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {base} from './style';

export default function Button({
  style,
  title,
  color,
  disabled,
  contentContainerStyle,
  titleStyle,
  onPress,
}) {
  return (
    <View style={[base.w2, style]}>
      <TouchableOpacity
        style={[
          base.w1,
          contentContainerStyle,
          color && !disabled && {backgroundColor: color},
        ]}
        disabled={disabled}
        onPress={onPress}>
        <Text style={[base.t1, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
