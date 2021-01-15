import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/profile';
import Input from 'input/profile';
import Button from 'button';
import ModalPassword from 'modal/profile';

// Style
import {base} from './style';

export default function Profile({
  user,
  // setFirstName,
  // setSecondName,
  fetchUserAcceptEmail,
  fetchLogout,
}) {
  // const refName = useRef();
  // const refLastName = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  // const refPhone = useRef();
  // const refBirthday = useRef();
  // const refCountry = useRef();
  // const refCity = useRef();
  // const refStreet = useRef();
  const [show, setShow] = useState(false);

  // function changeFirstName(text) {
  //   const {access_token} = user;
  //   const query = {FirstName: text};
  //   setFirstName({access_token, query});
  // }

  // function changeSecondName(text) {
  //   const {access_token} = user;
  //   const query = {SecondName: text};
  //   setSecondName({access_token, query});
  // }

  const onPressVerifyEmail = () => {
    const query = {
      token: user.access_token,
    };
    fetchUserAcceptEmail({
      access_token: user.access_token,
      query,
    });
  };
  // const onPressVerifyPhone = () => {};

  return (
    <Wrap titleView={<Header />}>
      <Text style={base.t1}>
        {i18n.t('t23')}
        {'\n'}
        {i18n.t('t24')}
      </Text>
      <View style={base.w1}>
        {/* <Text style={base.t2}>Личные данные</Text>
        <Input
          ref={refName}
          value={user.firstName}
          placeholder="Имя"
          onSubmitEditing={changeFirstName}
        />
        <View style={base.w2} />
        <Input
          ref={refLastName}
          value={user.secondName}
          placeholder="Фамилия"
          onSubmitEditing={changeSecondName}
        /> */}

        <Text style={base.t2}>{i18n.t('t29')}</Text>
        <Input
          ref={refEmail}
          value={user.email}
          editable={false}
          placeholder={i18n.t('t13')}
          keyboardType="email-address"
          // button={!user.isEmailVerified}
          // buttonTitle={i18n.t('t25')}
          // buttonPress={onPressVerifyEmail}
        />
        {/* <View style={base.w2} />
        <Input
          ref={refPassword}
          editable={false}
          placeholder={i18n.t('t26')}
          secureTextEntry
        /> */}
        <View style={base.w2} />
        {!user.isEmailVerified && (
          <Button
            title={i18n.t('t25')}
            color="#009F06"
            onPress={onPressVerifyEmail}
          />
        )}

        <View style={base.w2} />
        <Button
          title={i18n.t('t27')}
          color="#009F06"
          onPress={() => setShow(true)}
        />

        {/* <Text style={base.t2}>Данные</Text>
        <Input
          ref={refPhone}
          value={user.phone}
          editable={false}
          placeholder="Мобильный телефон"
          keyboardType="phone-pad"
          button={!user.isPhoneVerified}
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
        <Input ref={refStreet} placeholder="Улица и номер дома" /> */}

        <View style={base.w2} />
        <Button title={i18n.t('t28')} color="red" onPress={fetchLogout} />
        <View style={base.w2} />
        <ModalPassword isVisible={show} onPressClose={() => setShow(false)} />
      </View>
    </Wrap>
  );
}
