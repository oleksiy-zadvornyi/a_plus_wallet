import React from 'react';
import {View, Text} from 'react-native';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/settings';
import Item from 'item/settings';

// Helpers
import * as Images from 'helpers/images';

// Style
import {base} from './style';

export default function Settings() {
  return (
    <Wrap titleView={<Header />}>
      <View style={base.w1}>
        <Item
          icon={Images.coinPiles}
          title="Валюта баланса и операций"
          type="text"
          data={['USD']}
        />
        <View style={base.w2} />
        <Item
          icon={Images.touch}
          title="Разблокировать с TouchID"
          type="switch"
        />
        <View style={base.w2} />
        <Item
          icon={Images.coverFood}
          title="Скрывать пустые аккаунты"
          type="switch"
        />
        <View style={base.w2} />
        <Item
          icon={Images.barChart}
          title="Брать курс для баланса с"
          type="text"
          data={['Binance']}
        />
        <View style={base.w2} />
        <Item
          icon={Images.themeLightDark}
          title="Тема оформления"
          type="switch"
        />
        <View style={base.w2} />
        <Item icon={Images.language} title="Язык приложения" type="lang" />
      </View>

      <Text style={base.t1}>Безопасность</Text>
      <Item icon={Images.securityChecked} title="Подключение 2GA" type="next" />
      <View style={base.w2} />
      <Item icon={Images.emailLock} title="Верификация email" type="next" />
      <View style={base.w2} />
      <Item
        icon={Images.verifyPhone}
        title="Верификация телефона"
        type="next"
      />
      <View style={base.w2} />

      <View style={base.flex} />

      <Item icon={Images.light} title="О приложении" type="button" />
      <View style={base.w3} />
    </Wrap>
  );
}
