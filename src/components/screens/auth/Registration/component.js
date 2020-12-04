import React, {useRef} from 'react';
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
      showToast('Введите логин пользователя');
      return;
    }
    const password = refPassword.current.getValue();
    if (password.length === 0) {
      showToast('Введите пароль');
      return;
    }
    const rePassword = refRePassword.current.getValue();
    if (password !== rePassword) {
      showToast('Пароли не совпадают');
      return;
    }
    const email = refEmail.current.getValue();
    if (email.length === 0) {
      showToast('Введите email');
      return;
    }

    // fetchSignup({userName, password, email});
  }

  return (
    <Wrap titleView={<Header title="Регистрация" />}>
      <View style={base.flex} />
      <View style={base.w1}>
        <Image source={Images.logo} width={dw(230)} />
        <Text style={base.t1}>
          После регистрации вы сможете войти в систему
        </Text>
        <Input
          ref={refEmail}
          style={base.w2}
          placeholder="ваш email"
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => refLogin.current.focus()}
        />
        <Input
          ref={refLogin}
          style={base.w2}
          placeholder="ваш логин"
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          ref={refPassword}
          style={base.w2}
          placeholder="ваш пароль"
          returnKeyType="next"
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
          // onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          ref={refRePassword}
          style={base.w2}
          placeholder="повторите пароль"
          autoCapitalize="none"
          secureTextEntry
          textContentType="oneTimeCode"
          onSubmitEditing={done}
        />
        <Button
          style={base.w2}
          title="Отправить"
          color="#009F06"
          onPress={done}
        />
        <View style={base.w4}>
          <Text style={base.t2}>У вас уже есть аккаунт?</Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={base.t3}>Перейдите на страницу входа.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={base.flex} />
    </Wrap>
  );
}
