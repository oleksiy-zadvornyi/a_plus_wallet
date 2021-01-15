import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import i18n from 'i18n-js';

// Style
import {base} from './style';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={base.w1}>
      <View style={{height: insets.top, backgroundColor: 'white'}} />
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#1D2741', '#405896']}
        style={base.w2}>
        <View style={base.w3} />
        <Text style={base.t1}>{i18n.t('t68')}</Text>
        <View style={base.w3} />
      </LinearGradient>
    </View>
  );
}
