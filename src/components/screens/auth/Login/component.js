import React, {useRef} from 'react';
import i18n from 'i18n-js';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Image from 'react-native-scalable-image';
import dw from 'hooks/useDesignWidth';

// Components
import Wrap from 'base/Wrap';
import Header from 'header';
import Input from 'input';
import Button from 'button';

// Helpers
import * as Images from 'helpers/images';

// Style
import {base} from './style';

export default function Login({fetchLogin, showToast}) {
  const refLogin = useRef(null);
  const refPassword = useRef(null);
  const navigation = useNavigation();

  const done = () => {
    const userName = refLogin.current.getValue();
    if (userName.length === 0) {
      showToast(i18n.t('t1'));
      return;
    }
    const password = refPassword.current.getValue();
    if (password.length === 0) {
      showToast(i18n.t('t2'));
      return;
    }
    fetchLogin({userName, password});
  };

  return (
    <Wrap titleView={<Header title={i18n.t('t3')} />}>
      <View style={base.flex} />
      <View style={base.w1}>
        <Image source={Images.logo} height={dw(100)} />
        <Text style={base.t1}>{i18n.t('t4')}</Text>
        <Input
          ref={refLogin}
          style={base.w2}
          placeholder={i18n.t('t5')}
          returnKeyType="next"
          autoCapitalize="none"
          // value="witetigre"
          onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          ref={refPassword}
          style={[base.w2]}
          placeholder={i18n.t('t6')}
          autoCapitalize="none"
          secureTextEntry
          // value="user3b560f"
          onSubmitEditing={done}
        />
        <Button
          style={base.w2}
          title={i18n.t('t7')}
          color="#009F06"
          onPress={done}
        />
        <View style={base.w4}>
          <Text style={base.t2}>{i18n.t('t8')}</Text>
          <TouchableOpacity onPress={() => navigation.replace('Registration')}>
            <Text style={base.t3}>{i18n.t('t9')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={base.flex} />
    </Wrap>
  );
}
