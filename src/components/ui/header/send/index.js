import React from 'react';
import {Text, View} from 'react-native';
import Image from 'react-native-scalable-image';
import {LinearGradient} from 'expo-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import i18n from 'i18n-js';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Header({step, title}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={base.w1}>
      <View style={{height: insets.top, backgroundColor: 'white'}} />
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#1D2741', '#405896']}
        style={base.w2}>
        <View style={base.w3}>
          {navigation.canGoBack() && (
            <Image
              source={Images.arrowLeft}
              height={dw(35)}
              onPress={navigation.goBack}
            />
          )}
        </View>

        <View style={base.w5}>
          <Text style={base.t1}>{`${i18n.t('t63')} ${step} ${i18n.t(
            't64',
          )} 4`}</Text>
          <Text style={base.t2}>{title}</Text>
        </View>
        <View style={base.w4} />
      </LinearGradient>
    </View>
  );
}
