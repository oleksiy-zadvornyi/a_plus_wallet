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

export default function Header({step, title, goBack}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[base.w1, {paddingTop: dw(8) + insets.top}]}>
      <View style={base.w2}>
        {goBack ? (
          <Image
            source={Images.arrowLeft}
            width={dw(30)}
            onPress={navigation.goBack}
          />
        ) : (
          <View style={base.w3} />
        )}

        <View style={base.w4}>
          <Text style={base.t1}>{title}</Text>
          <Text style={base.t2}>
            {i18n.t('t63')} {step} {i18n.t('t64')} 2
          </Text>
        </View>
        {!goBack ? (
          <View style={base.w3}>
            <Image
              source={Images.cross}
              width={dw(30)}
              onPress={navigation.goBack}
            />
          </View>
        ) : (
          <View style={base.w3} />
        )}
      </View>
    </View>
  );
}
