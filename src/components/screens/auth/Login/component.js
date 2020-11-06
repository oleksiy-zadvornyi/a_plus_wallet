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

export default function Login({fetchLogin, showToast}) {
  const refLogin = useRef(null);
  const refPassword = useRef(null);
  const navigation = useNavigation();

  const done = () => {
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
    fetchLogin({userName, password});
  };

  return (
    <Wrap titleView={<Header title="Вход" />}>
      <View style={base.flex} />
      <View style={base.w1}>
        <Image source={Images.logo} width={dw(230)} />
        <Text style={base.t1}>Войдите, если вы зарегистрированы</Text>
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
          style={[base.w2]}
          placeholder="ваш пароль"
          autoCapitalize="none"
          secureTextEntry
          onSubmitEditing={done}
        />
        <Button
          style={base.w2}
          title="Отправить"
          color="#009F06"
          onPress={done}
        />
        <View style={base.w4}>
          <Text style={base.t2}>
            Если у вас еще нет аккаунта, то пройдите несложную
          </Text>
          <TouchableOpacity onPress={() => navigation.replace('Registration')}>
            <Text style={base.t3}>регистрацию</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={base.flex} />
    </Wrap>
  );
}
