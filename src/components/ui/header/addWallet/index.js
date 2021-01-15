import React from 'react';
import {Text, View} from 'react-native';
import Image from 'react-native-scalable-image';
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
    <View>
      <View style={{height: insets.top, backgroundColor: 'white'}} />
      <View style={base.w1}>
        <View style={base.w2}>
          {navigation.canGoBack() && (
            <Image
              source={Images.arrowLeft}
              height={dw(35)}
              onPress={navigation.goBack}
            />
          )}

          <View style={base.w4}>
            <Text style={base.t1}>{title}</Text>
            <Text style={base.t2}>
              {i18n.t('t63')} {step} {i18n.t('t64')} 2
            </Text>
          </View>
          <View style={base.w3} />
        </View>
      </View>
    </View>
  );
}
