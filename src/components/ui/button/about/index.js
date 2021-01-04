import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import i18n from 'i18n-js';

import {base} from './style';

export default function Button({
  style,
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
        <Text style={[base.t1, titleStyle]}>{i18n.t('t104')}</Text>
        <Text style={[base.t2, titleStyle]}>
          {i18n.t('t105')} {Platform.OS === 'ios' ? 'App Store' : 'Google Play'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
