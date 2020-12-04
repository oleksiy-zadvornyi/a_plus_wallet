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

export default function About({isVisible, onPressClose}) {
  return (
    <Modal
      style={base.w1}
      isVisible={isVisible}
      onBackButtonPress={onPressClose}
      onBackdropPress={onPressClose}>
      <View style={base.w2}>
        <View style={base.w3}>
          <View style={base.w4} />
          <View style={base.flex} />
          <Image source={Images.logo} width={dw(230)} />
          <View style={base.flex} />
          <Image source={Images.cross} width={dw(30)} onPress={onPressClose} />
        </View>
        <View style={base.w5}>
          <Text style={base.t1}>Version</Text>
          <View style={base.flex} />
          <Text style={base.t1}>1</Text>
        </View>
        <View style={base.w5}>
          <View>
            <Text style={base.t1}>Terms and conditions</Text>
            <Text style={base.t2}>
              By using APlus Wallet you are deemed to have{'\n'}accepted our
              terms and conditions
            </Text>
          </View>
          <View style={base.flex} />
          <Image source={Images.arrowRight} width={dw(20)} />
        </View>
        <View style={base.w5}>
          <View>
            <Text style={base.t1}>Privacy policy</Text>
            <Text style={base.t2}>
              Learn what personal data we collect{'\n'}
              why and how we use it.
            </Text>
          </View>
          <View style={base.flex} />
          <Image source={Images.arrowRight} width={dw(20)} />
        </View>
        <View style={base.w6} />
      </View>
    </Modal>
  );
}
