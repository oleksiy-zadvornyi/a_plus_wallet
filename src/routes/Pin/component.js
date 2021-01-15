import React, {useState} from 'react';
import {Alert, View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import * as LocalAuthentication from 'expo-local-authentication';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header';
import Button from 'button';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

export default function Pin({
  localPin,
  usePin,
  reducePin,
  reduceUseTouchId,
  reduceUsePin,
}) {
  const [pin, setPin] = useState([]);
  const [pinIndex, setPinIndex] = useState(-1);

  function onPressPin(numb) {
    if (pinIndex < 3) {
      setPin([...pin, numb]);
      setPinIndex(pinIndex + 1);
    }
  }

  function onPressBackspace() {
    if (pinIndex > -1) {
      setPin(pin.filter((e, i) => i !== pin.length - 1));
      setPinIndex(pinIndex - 1);
    }
  }

  function savePin() {
    reduceUsePin(true);
    reducePin(pin.join(''));
  }
  function saveFingerprints() {
    reduceUsePin(true);
    reducePin(pin.join(''));
    reduceUseTouchId(true);
  }

  async function done() {
    const fingerprints = await LocalAuthentication.isEnrolledAsync();
    if (fingerprints) {
      Alert.alert(
        i18n.t('t114'),
        i18n.t('t115'),
        [
          {
            text: i18n.t('no'),
            onPress: savePin,
          },
          {
            text: i18n.t('yes'),
            onPress: saveFingerprints,
          },
        ],
        {cancelable: false},
      );
    } else {
      savePin();
    }
  }

  return (
    <Wrap titleView={<Header title={i18n.t('t113')} />}>
      <View style={base.flex} />
      <Text style={base.t1}>{i18n.t('t116')}</Text>
      <View style={base.flex} />
      <View style={base.w1}>
        <View style={pin[0] ? base.w3 : base.w2} />
        <View style={pin[1] ? base.w3 : base.w2} />
        <View style={pin[2] ? base.w3 : base.w2} />
        <View style={pin[3] ? base.w3 : base.w2} />
      </View>
      <View style={base.flex} />
      <View style={base.w4}>
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('1')}>
          <Text style={base.t3}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('2')}>
          <Text style={base.t3}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('3')}>
          <Text style={base.t3}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={base.w4}>
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('4')}>
          <Text style={base.t3}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('5')}>
          <Text style={base.t3}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('6')}>
          <Text style={base.t3}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={base.w4}>
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('7')}>
          <Text style={base.t3}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('8')}>
          <Text style={base.t3}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('9')}>
          <Text style={base.t3}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={base.w4}>
        <View style={base.w6} />
        <TouchableOpacity style={base.w5} onPress={() => onPressPin('0')}>
          <Text style={base.t3}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={base.w5} onPress={onPressBackspace}>
          <Image source={Images.backspace} width={dw(23)} />
        </TouchableOpacity>
      </View>
      <View style={base.flex} />
      <Button
        style={base.w7}
        disabled={pin.length < 4}
        title={i18n.t('t22')}
        color="#009F06"
        onPress={done}
      />
      <View style={base.flex} />
    </Wrap>
  );
}
