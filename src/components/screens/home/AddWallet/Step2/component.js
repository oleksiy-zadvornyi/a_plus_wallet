import React, {useRef} from 'react';
import moment from 'moment';
import md5 from 'md5';
import {useRoute, useNavigation} from '@react-navigation/native';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/addWallet';
import Input from 'input';
import Button from 'button';

// Style
import {base} from './style';

export default function CryptoName({id, access_token, postAccountCreate}) {
  const refName = useRef(null);
  const route = useRoute();
  const navigation = useNavigation();

  function done() {
    const props = route.params?.props ?? null;
    if (props) {
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
    <Wrap
      noScroll
      titleView={<Header title="Название кошелька" step={2} goBack />}>
      <Input
        ref={refName}
        style={base.w1}
        placeholder="введите название кошелька"
      />
      <Button style={base.w1} title="Создать" color="#009F06" onPress={done} />
    </Wrap>
  );
}
