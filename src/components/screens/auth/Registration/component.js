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

export default function Registration({fetchSignup, showToast}) {
  const refEmail = useRef(null);
  const refLogin = useRef(null);
  const refPassword = useRef(null);
  const refRePassword = useRef(null);
  const navigation = useNavigation();

  function done() {
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
    const rePassword = refRePassword.current.getValue();
    if (password !== rePassword) {
      showToast(i18n.t('t10'));
      return;
    }
    const email = refEmail.current.getValue();
    if (email.length === 0) {
      showToast(i18n.t('t11'));
      return;
    }

    fetchSignup({userName, password, email});
  }

  return (
    <Wrap titleView={<Header title={i18n.t('t17')} />}>
      <View style={base.flex} />
      <View style={base.w1}>
        <Image source={Images.logo} height={dw(61)} />
        <Text style={base.t1}>{i18n.t('t12')}</Text>
        <Input
          ref={refEmail}
          style={base.w2}
          placeholder={i18n.t('t13')}
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => refLogin.current.focus()}
        />
        <Input
          ref={refLogin}
          style={base.w2}
          placeholder={i18n.t('t5')}
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          ref={refPassword}
          style={base.w2}
          placeholder={i18n.t('t6')}
          returnKeyType="next"
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
          // onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          ref={refRePassword}
          style={base.w2}
          placeholder={i18n.t('t14')}
          autoCapitalize="none"
          secureTextEntry
          textContentType="oneTimeCode"
          onSubmitEditing={done}
        />
        <Button
          style={base.w2}
          title={i18n.t('t7')}
          color="#009F06"
          onPress={done}
        />
        <View style={base.w4}>
          <Text style={base.t2}>{i18n.t('t15')}</Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={base.t3}>{i18n.t('t16')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={base.flex} />
    </Wrap>
  );
}
