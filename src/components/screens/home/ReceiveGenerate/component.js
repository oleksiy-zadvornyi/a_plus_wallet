import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/receive';
import Input from 'input/receive';
import Button from 'button';

// Style
import {base} from './style';

export default function ReceiveGenerate() {
  return (
    <Wrap noScroll titleView={<Header />}>
      <Text style={base.t1}>
        Скопируйте адрес или, при необходимости,{'\n'}
        сгенерируйте новый и отправьте{'\n'}
        его плательщику.
      </Text>
      <View style={base.w1}>
        <Input />
        <View style={base.w2}>
          <Button
            style={base.w3}
            title="Сгенерировать новый адрес"
            color="#009F06"
          />
          <View style={base.w4} />
          <Button title="Скопировать" color="#1B48BC" />
        </View>
      </View>
    </Wrap>
  );
}
