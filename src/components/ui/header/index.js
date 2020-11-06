import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';

import {base} from './style';

export default function Header({title}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={base.w1}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#1D2741', '#405896']}
        style={[base.w2, {paddingTop: insets.top}]}>
        <Text style={base.t1}>{title}</Text>
      </LinearGradient>
    </View>
  );
}
