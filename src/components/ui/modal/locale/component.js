import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import i18n from 'i18n-js';

// Helpers
import {locales} from 'helpers/locales';

// Style
import {base} from './style';

export default function Locale({locale, isVisible, onPressClose, setLocale}) {
  function onPress(e) {
    setLocale(e);
    onPressClose();
  }

  return (
    <Modal
      style={base.w1}
      isVisible={isVisible}
      onBackButtonPress={onPressClose}
      onBackdropPress={onPressClose}>
      <View style={base.w2}>
        {locales.map((e, i) => (
          <TouchableOpacity
            key={i}
            style={[base.w3, e === locale && base.w4]}
            onPress={() => onPress(e)}>
            <Text style={base.t1}>{i18n.t(e)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}
