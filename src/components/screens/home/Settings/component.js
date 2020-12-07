import React, {useState} from 'react';
import {View, Text} from 'react-native';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/settings';
import Item from 'item/settings';
import ModalAbout from 'modal/about';

// Helpers
import * as Images from 'helpers/images';

// Style
import {base} from './style';

export default function Settings() {
  const [show, setShow] = useState(false);

  return (
    <Wrap titleView={<Header />}>
      <View style={base.w1}>
        <Item
          icon={Images.coinPiles}
          title={i18n.t('t52')}
          type="text"
          data={['USD']}
        />
        {/* <View style={base.w2} /> */}
        {/* <Item
          icon={Images.touch}
          title="Разблокировать с TouchID"
          type="switch"
        /> */}
        <View style={base.w2} />
        <Item icon={Images.coverFood} title={i18n.t('t53')} type="switch" />
        <View style={base.w2} />
        <Item
          icon={Images.barChart}
          title={i18n.t('t54')}
          type="text"
          data={['Binance']}
        />
        {/* <View style={base.w2} />
        <Item
          icon={Images.themeLightDark}
          title="Тема оформления"
          type="switch"
        /> */}
        <View style={base.w2} />
        <Item icon={Images.language} title={i18n.t('t55')} type="lang" />
      </View>

      {/* <Text style={base.t1}>Безопасность</Text>
      <Item icon={Images.securityChecked} title="Подключение 2GA" type="next" />
      <View style={base.w2} />
      <Item icon={Images.emailLock} title="Верификация email" type="next" />
      <View style={base.w2} />
      <Item
        icon={Images.verifyPhone}
        title="Верификация телефона"
        type="next"
      />
      <View style={base.w2} /> */}

      <View style={base.flex} />

      <Item
        icon={Images.light}
        title={i18n.t('t56')}
        type="button"
        onPress={() => setShow(true)}
      />
      <View style={base.w3} />
      <ModalAbout isVisible={show} onPressClose={() => setShow(false)} />
    </Wrap>
  );
}
