import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Image from 'react-native-scalable-image';

// Components
import Button from 'button';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

const filters = [
  'Название от A-Z',
  'Название от Z-A',
  'От низкого к высокому балансу',
  'От высокого к низкому балансу',
];

export default function Filter({
  isVisible,
  index,
  onPressSelect,
  onPressClose,
}) {
  return (
    <Modal
      style={base.w1}
      isVisible={isVisible}
      onBackButtonPress={onPressClose}
      onBackdropPress={onPressClose}>
      <View style={base.flex} />
      <View style={base.w2}>
        <Text style={base.t1}>Сортировать по</Text>
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
          title="Готово"
          color="#009F06"
          onPress={onPressClose}
        />
      </View>
    </Modal>
  );
}
