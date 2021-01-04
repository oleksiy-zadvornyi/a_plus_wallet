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

export default function List({
  isVisible,
  value,
  list,
  onPressSelect,
  onPressClose,
}) {
  return (
    <Modal
      style={base.w1}
      isVisible={isVisible}
      onBackButtonPress={onPressClose}
      onBackdropPress={onPressClose}>
      <View style={base.w2}>
        {list.map((e, i) => (
          <TouchableOpacity
            key={i}
            style={[base.w3, e.name === value && base.w4]}
            onPress={() => onPressSelect(e.value)}>
            <Text style={base.t1}>{e.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}
