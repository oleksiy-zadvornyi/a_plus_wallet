import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {Switch} from 'react-native-switch';
import i18n from 'i18n-js';

// Helpers
import * as Images from 'helpers/images';

// Hooks
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Item({
  icon,
  title,
  type,
  invisible,
  value,
  data,
  locale,
  onPress,
  onValueChange,
  showToast,
}) {
  const renderType = () => {
    switch (type) {
      case 'text': {
        return (
          <View style={base.w2}>
            <Text style={base.t2}>{data[0]}</Text>
          </View>
        );
      }
      case 'switch': {
        return (
          <View style={base.w2}>
            <Switch
              renderActiveText={false}
              renderInActiveText={false}
              backgroundInactive="#444444"
              circleBorderWidth={0}
              circleSize={dw(20)}
              barHeight={dw(30)}
              switchWidthMultiplier={2.8}
              value={value}
              onValueChange={onValueChange}
            />
          </View>
        );
      }
      case 'lang': {
        return (
          <View style={base.w3}>
            <Image source={Images[locale]} width={dw(36)} />
            <Text style={base.t3}>{i18n.t(locale)}</Text>
          </View>
        );
      }
      case 'next': {
        return (
          <View style={base.w2}>
            <Image source={Images.rightArrow} width={dw(32)} />
          </View>
        );
      }
    }
  };

  return (
    <TouchableOpacity
      style={[base.w1, invisible && base.w5]}
      onPress={invisible ? () => showToast(i18n.t('t109')) : onPress}>
      {type === 'button' ? (
        <View style={base.w4}>
          <Image source={icon} width={dw(18)} />
        </View>
      ) : (
        <Image source={icon} width={dw(32)} />
      )}

      <Text style={base.t1}>{title}</Text>
      {renderType()}
    </TouchableOpacity>
  );
}
