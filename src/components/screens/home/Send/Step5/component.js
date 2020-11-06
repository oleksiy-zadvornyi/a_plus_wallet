import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/send';
import Button from 'button';

// Style
import {base} from './style';

export default function Step5() {
  const navigation = useNavigation();

  const onPressCode = () => {};
  const onPressSend = () => {};

  return (
    <Wrap
      noScroll
      titleView={<Header step={5} title="Подтверждение и отправка" />}>
      <Text style={base.t1}>
        Вам отправлено SMS сообщение{'\n'}с кодом подтверждения.{'\n'}Введите
        код и нажмите{'\n'}“Отправить”
      </Text>
      <View style={base.w1} />
      <Button
        style={base.w2}
        title="Введите код подтверждения"
        onPress={onPressCode}
      />
      <View style={base.w1} />
      <View style={base.flex} />
      <Button style={base.w3} title="Отправить" onPress={onPressSend} />
    </Wrap>
  );
}
