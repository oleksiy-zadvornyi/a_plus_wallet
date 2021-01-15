/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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

export default function LocalPin({
  localPin,
  useTouchId,
  reduceUsePin,
  showToast,
}) {
  const [pin, setPin] = useState([]);
  const [pinIndex, setPinIndex] = useState(-1);

  useEffect(() => {
    if (useTouchId) {
      fingerprints();
    }
  }, []);

  async function fingerprints() {
    const fp = await LocalAuthentication.isEnrolledAsync();
    if (fp) {
      const result = await LocalAuthentication.authenticateAsync();
      if (result) {
        reduceUsePin(true);
      }
    }
  }

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

  async function done() {
    if (pin.join('') !== localPin) {
      showToast(i18n.t('t10'));
      setPin([]);
      setPinIndex(-1);
      return;
    }
    reduceUsePin(true);
  }

  if (useTouchId) {
    return <Wrap titleView={<Header title={i18n.t('t113')} />} />;
  }

  return (
    <Wrap titleView={<Header title={i18n.t('t113')} />}>
      <View style={base.flex} />
      <Text style={base.t1}>{i18n.t('t117')}</Text>
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
        title={i18n.t('t118')}
        color="#009F06"
        onPress={done}
      />
      <View style={base.flex} />
    </Wrap>
  );
}
