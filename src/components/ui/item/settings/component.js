import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import {Switch} from 'react-native-switch';

// Helpers
import * as Images from 'helpers/images';

// Hooks
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Item({icon, title, type, data}) {
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
            />
          </View>
        );
      }
      case 'lang': {
        return (
          <View style={base.w3}>
            <Image source={Images.flagRussia} width={dw(36)} />
            <Text style={base.t3}>RUS</Text>
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
    <View style={base.w1}>
      {type === 'button' ? (
        <View style={base.w4}>
          <Image source={icon} width={dw(18)} />
        </View>
      ) : (
        <Image source={icon} width={dw(32)} />
      )}

      <Text style={base.t1}>{title}</Text>
      {renderType()}
    </View>
  );
}
