import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Image from 'react-native-scalable-image';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

const filters = [
  {
    title: 'Отправить',
    image: 'transactionUp',
    screen: 'Step1',
  },
  {
    title: 'Получить',
    image: 'transactionDown',
    screen: 'Receive',
  },
];

export default function Transfer({navigation, isVisible, onPressClose}) {
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
            <TouchableOpacity key={i} style={base.w3} onPress={onPress}>
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
