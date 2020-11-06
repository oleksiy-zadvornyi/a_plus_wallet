import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/transaction';
import Button from 'button';

// Style
import {base} from './style';

export default function Transaction() {
  return (
    <Wrap titleView={<Header />}>
      <View style={base.w1}>
        <Text style={base.t1}>Аккаунт</Text>
        <Text style={base.t2}>Bitcoin (local)</Text>

        <Text style={base.t1}>Дата отправки</Text>
        <Text style={base.t2}>10 октября, 2020 в 9:24 PM</Text>

        <Text style={base.t1}>Комиссия сети</Text>
        <Text style={base.t2}>0.00026316 BTC = $2.97</Text>

        <Text style={base.t1}>ID Транзакции</Text>
        <Text style={base.t3}>
          jhsdfgjfhfghjsdfgsjdhfgj3422jh2hgjh23h4gj2h3g4jgjhjjjg
          2334hg546jhjhg5755k7jh678
        </Text>

        <Text style={base.t1}>С кошелька</Text>
        <Text style={base.t3}>32XrZRLqeu4GyziSxjF9UamNJtxCeHwAdZ</Text>

        <Text style={base.t1}>На кошелек</Text>
        <Text style={base.t3}>32XrZRLqeu4GyziSxjF9UamNJtxCeHwAdZ</Text>
      </View>
      <View style={base.w2}>
        <Button title="View in explorer" color="#009F06" />
      </View>
    </Wrap>
  );
}
