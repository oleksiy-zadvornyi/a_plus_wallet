import React, {useRef} from 'react';
import {View} from 'react-native';
import moment from 'moment';
import md5 from 'md5';
import i18n from 'i18n-js';
import {useRoute, useNavigation} from '@react-navigation/native';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/addWallet';
import Input from 'input';
import Button from 'button';

// Style
import {base} from './style';

export default function CryptoName({
  id,
  access_token,
  postAccountCreate,
  showToast,
}) {
  const refName = useRef(null);
  const route = useRoute();
  const navigation = useNavigation();

  function done() {
    const props = route.params?.props ?? null;
    if (props) {
      const accountMask = refName.current.getValue();
      if (accountMask.length === 0) {
        showToast(i18n.t('t19'));
        return;
      }

      const query = {
        accountName: md5(`${id}_${moment().format('X')}`).substr(0, 18),
        node: props.node,
        // callback: null,
        accountMask: refName.current.getValue(),
      };
      postAccountCreate({access_token, query});
      navigation.replace('Wallet');
    }
  }

  return (
    <Wrap noScroll titleView={<Header title={i18n.t('t20')} step={2} goBack />}>
      <Input ref={refName} style={base.w2} placeholder={i18n.t('t21')} />

      <Button
        style={base.w2}
        title={i18n.t('t22')}
        color="#009F06"
        onPress={done}
      />
    </Wrap>
  );
}
