import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Image from 'react-native-scalable-image';
import i18n from 'i18n-js';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Transfer({navigation, isVisible, onPressClose}) {
  const filters = [
    {
      title: i18n.t('t7'),
      image: 'transactionUp',
      screen: 'Step1',
    },
    {
      title: i18n.t('t67'),
      image: 'transactionDown',
      screen: 'Receive',
    },
  ];
  return (
    <Modal
      style={base.w1}
      isVisible={isVisible}
      onBackButtonPress={onPressClose}
      onBackdropPress={onPressClose}>
      <View style={base.flex} />
      <View style={base.w2}>
        {filters.map((e, i) => {
          function onPress() {
            if (e.screen) {
              navigation.navigate(e.screen);
            }
            onPressClose();
          }

          return (
            <TouchableOpacity
              key={i}
              style={[base.w3, i < filters.length - 1 && base.w5]}
              onPress={onPress}>
              <View style={base.w4}>
                <Image source={Images[e.image]} width={dw(18)} />
              </View>
              <Text style={base.t1}>{e.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
}
