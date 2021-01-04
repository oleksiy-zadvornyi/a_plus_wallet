/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, Clipboard, Share} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useRoute} from '@react-navigation/native';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/receive';
import Input from 'input/receive';
import Button from 'button';
import ButtonIcon from 'button/icon';

// Helpers
import * as Images from 'helpers/images';

// Api
import {getDepositCreate} from 'store/api/deposit';

// Style
import {base} from './style';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function ReceiveGenerate(props) {
  const [hash, setHash] = useState();
  const route = useRoute();
  const {access_token, showNI, showToast} = props;

  useEffect(() => {
    const params = route.params?.props ?? null;
    if (params) {
      setHash(params.wallets[0]);
    }
  }, []);

  function depositCreate() {
    const params = route.params?.props ?? null;
    if (params) {
      const {accountName, node} = params;
      const query = {accountName, node};
      showNI(true);
      getDepositCreate({access_token, query})
        .then((result) => setHash(result.data))
        .catch((e) => console.log(e.response))
        .finally(() => showNI(false));
    }
  }

  function onPressClipboard() {
    if (hash) {
      Clipboard.setString(hash.address);
      showToast(i18n.t('t110'));
    }
  }

  function onShare() {
    Share.share({
      message: hash.address,
    });
  }

  return (
    <Wrap scroll titleView={<Header />}>
      <Text style={base.t1}>
        {i18n.t('t30')}
        {'\n'}
        {i18n.t('t31')}
        {'\n'}
        {i18n.t('t32')}
      </Text>
      <View style={base.w1}>
        {hash && (
          <View style={base.w5}>
            <QRCode size={wp(60)} value={hash.address} />
          </View>
        )}
        <Input value={hash && hash.address} />
        <View style={base.w2}>
          <Button
            style={base.w3}
            title={i18n.t('t33')}
            color="#009F06"
            onPress={depositCreate}
          />
          <View style={base.w4} />
          <Button
            title={i18n.t('t34')}
            color="#1B48BC"
            onPress={onPressClipboard}
          />
        </View>
        <ButtonIcon
          style={base.w6}
          title={i18n.t('t35')}
          color="#009F06"
          icon={Images.arrowUp}
          onPress={onShare}
        />
      </View>
    </Wrap>
  );
}
