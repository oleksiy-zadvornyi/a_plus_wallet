import React from 'react';
import {Text, View} from 'react-native';
import Image from 'react-native-scalable-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import i18n from 'i18n-js';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Header() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={base.w1}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#1D2741', '#405896']}
        style={[base.w2, {paddingTop: dw(12) + insets.top}]}>
        <View style={base.w3} />

        <View style={base.w5}>
          <Text style={base.t1}>{i18n.t('t69')}</Text>
          <Text style={base.t2}>{i18n.t('t70')}</Text>
        </View>
        <View style={base.w4}>
          <Image
            source={Images.cross}
            width={dw(30)}
            onPress={navigation.goBack}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
