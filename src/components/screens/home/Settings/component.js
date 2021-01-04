import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/settings';
import Item from 'item/settings';
import ModalAbout from 'modal/about';
import ModalLocale from 'modal/locale';

// Helpers
import * as Images from 'helpers/images';

// Style
import {base} from './style';

export default function Settings({locale, emptyAccount, reduceEmptyAccount}) {
  const [show, setShow] = useState(false);
  const [showLocale, setShowLocale] = useState(false);

  function onValueChange(props) {
    reduceEmptyAccount(props);
  }

  return (
    <Wrap titleView={<Header />}>
      <View style={base.w1}>
        <Item
          icon={Images.coinPiles}
          title={i18n.t('t52')}
          type="text"
          data={['USD']}
          invisible
        />
        <View style={base.w2} />
        <Item
          icon={Images.touch}
          title="Разблокировать с TouchID"
          type="switch"
          invisible
        />
        <View style={base.w2} />
        <Item
          icon={Images.coverFood}
          title={i18n.t('t53')}
          type="switch"
          value={emptyAccount}
          onValueChange={onValueChange}
        />
        <View style={base.w2} />
        <Item
          icon={Images.barChart}
          title={i18n.t('t54')}
          type="text"
          data={['Binance']}
          invisible
        />
        <View style={base.w2} />
        <Item
          icon={Images.themeLightDark}
          title="Тема оформления"
          type="switch"
          invisible
        />
        <View style={base.w2} />
        <Item
          icon={Images.language}
          title={i18n.t('t55')}
          type="lang"
          locale={locale}
          onPress={() => setShowLocale(true)}
        />
      </View>

      <Text style={base.t1}>Безопасность</Text>
      {/* <Item icon={Images.securityChecked} title="Подключение 2GA" type="next" />
      <View style={base.w2} /> */}
      <Item
        icon={Images.emailLock}
        title="Верификация email"
        type="next"
        invisible
      />
      <View style={base.w2} />
      <Item
        icon={Images.verifyPhone}
        title="Верификация телефона"
        type="next"
        invisible
      />
      <View style={base.w2} />

      <View style={base.flex} />

      <Item
        icon={Images.light}
        title={i18n.t('t56')}
        type="button"
        onPress={() => setShow(true)}
      />
      <View style={base.w3} />
      <ModalAbout isVisible={show} onPressClose={() => setShow(false)} />
      <ModalLocale
        isVisible={showLocale}
        locale={locale}
        onPressClose={() => setShowLocale(false)}
      />
    </Wrap>
  );
}
