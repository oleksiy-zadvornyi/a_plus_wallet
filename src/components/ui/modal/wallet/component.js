import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Image from 'react-native-scalable-image';
import i18n from 'i18n-js';

// Components
import Button from 'button';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Filter({
  isVisible,
  index,
  onPressSelect,
  onPressClose,
}) {
  const filters = [
    `${i18n.t('t90')} A-Z`,
    `${i18n.t('t90')} Z-A`,
    i18n.t('t91'),
    i18n.t('t92'),
  ];

  return (
    <Modal
      style={base.w1}
      isVisible={isVisible}
      onBackButtonPress={onPressClose}
      onBackdropPress={onPressClose}>
      <View style={base.flex} />
      <View style={base.w2}>
        <Text style={base.t1}>{i18n.t('t93')}</Text>
        {filters.map((e, i) => {
          function onPress() {
            onPressSelect(i);
          }

          return (
            <TouchableOpacity
              key={i}
              style={[base.w3, index === i && base.w4]}
              onPress={onPress}>
              <Text style={base.t2}>{e}</Text>
              {index === i && <Image source={Images.ok} width={dw(15)} />}
            </TouchableOpacity>
          );
        })}
        <Button
          style={base.w5}
          title={i18n.t('t94')}
          color="#009F06"
          onPress={onPressClose}
        />
      </View>
    </Modal>
  );
}
