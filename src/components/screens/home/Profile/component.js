import React, {useRef} from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/profile';
import Input from 'input/profile';
import Button from 'button';

// Style
import {base} from './style';

export default function Profile({fetchLogout}) {
  const refName = useRef();
  const refLastName = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  const refPhone = useRef();
  const refBirthday = useRef();
  const refCountry = useRef();
  const refCity = useRef();
  const refStreet = useRef();

  const onPressVerifyEmail = () => {};
  const onPressVerifyPhone = () => {};
  const onPressChange = () => {};

  return (
    <Wrap titleView={<Header />}>
      <Text style={base.t1}>
        Профиль заполняется по желанию.{'\n'}
        Прохождение верификации добровольное.
      </Text>
      <View style={base.w1}>
        <Text style={base.t2}>Личные данные</Text>
        <Input ref={refName} placeholder="Имя" />
        <View style={base.w2} />
        <Input ref={refLastName} placeholder="Фамилия" />

        <Text style={base.t2}>Личные данные</Text>
        <Input
          ref={refEmail}
          placeholder="ваш email"
          keyboardType="email-address"
          button
          buttonTitle="ВЕРИФИЦИРОВАТЬ"
          buttonPress={onPressVerifyEmail}
        />
        <View style={base.w2} />
        <Input ref={refPassword} placeholder="пароль" secureTextEntry />
        <View style={base.w2} />
        <Button title="Изменить" color="#009F06" onPress={onPressChange} />

        <Text style={base.t2}>Данные</Text>
        <Input
          ref={refPhone}
          placeholder="Мобильный телефон"
          keyboardType="phone-pad"
          button
          buttonTitle="ВЕРИФИЦИРОВАТЬ"
          buttonPress={onPressVerifyPhone}
        />
        <View style={base.w2} />
        <Input
          ref={refBirthday}
          placeholder="Дата рождения"
          keyboardType="decimal-pad"
        />

        <Text style={base.t2}>Адрес</Text>
        <Input ref={refCountry} placeholder="Страна" />
        <View style={base.w2} />
        <Input ref={refCity} placeholder="Город" />
        <View style={base.w2} />
        <Input ref={refStreet} placeholder="Улица и номер дома" />
        <View style={base.w2} />
        <Button title="Выход" color="#009F06" onPress={fetchLogout} />
        <View style={base.w2} />
      </View>
    </Wrap>
  );
}
