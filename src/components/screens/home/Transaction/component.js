import React from 'react';
import moment from 'moment';
import {View, Text, Linking} from 'react-native';
import {useRoute} from '@react-navigation/native';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/transaction';
import Button from 'button';

// Style
import {base} from './style';

export default function Transaction() {
  const route = useRoute();
  const props = route.params?.props ?? null;

  if (props) {
    const {
      accountMask,
      accountName,
      createdAt,
      node,
      txId,
      discriminator,
      depositAddress,
      withdrawalAddress,
      fee,
    } = props;

    function openLink() {
      if (node === 'XRP') {
        Linking.openURL(`https://xrpscan.com/tx/${txId}`);
      } else {
        Linking.openURL(`https://tokenview.com/ru/search/${txId}`);
      }
    }

    function getBool() {
      if (discriminator === 'Withdrawal') {
        return false;
      }
      return true;
    }

    return (
      <Wrap titleView={<Header {...props} />}>
        <View style={base.w1}>
          <Text style={base.t1}>{i18n.t('t57')}</Text>
          <Text style={base.t2}>{accountMask || accountName}</Text>

          <Text style={base.t1}>{i18n.t('t58')}</Text>
          <Text style={base.t2}>
            {moment(createdAt).format('DD MMMM, YYYY в h:mm A')}
          </Text>

          <Text style={base.t1}>{i18n.t('t48')}</Text>
          <Text style={base.t2}>
            {fee} {node}
          </Text>

          <Text style={base.t1}>{i18n.t('t59')}</Text>
          <Text style={base.t3}>{txId || i18n.t('t60')}</Text>

          <Text style={base.t1}>{i18n.t('t46')}</Text>
          <Text style={base.t3}>
            {getBool() ? depositAddress : accountMask}
          </Text>

          <Text style={base.t1}>{i18n.t('t47')}</Text>
          <Text style={base.t3}>
            {getBool() ? accountMask : withdrawalAddress}
          </Text>
        </View>
        {txId && (
          <View style={base.w2}>
            <Button
              title="View in explorer"
              color="#009F06"
              onPress={openLink}
            />
          </View>
        )}
      </Wrap>
    );
  }
}
