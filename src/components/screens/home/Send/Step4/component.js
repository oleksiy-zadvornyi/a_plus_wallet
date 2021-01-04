import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Image from 'react-native-scalable-image';
import {useNavigation, useRoute} from '@react-navigation/native';
import dw from 'hooks/useDesignWidth';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/send';
import Button from 'button';

// Helpers
import * as Images from 'helpers/images';

// Api
import {postWithdrawalCreate} from 'store/api/withdrawal';
import {postFeeRatesGet} from 'store/api/feeRates';

// Style
import {base} from './style';

export default function Step4({access_token, showNI}) {
  const navigation = useNavigation();
  const route = useRoute();
  const props = route.params?.props ?? {};
  const [fee, setFee] = useState(0);

  useState(() => {
    const query = {node: props.node};
    showNI(true);
    postFeeRatesGet({access_token, query})
      .then((result) => setFee(result.data.feeRate))
      .catch((e) => console.log(e.response))
      .finally(() => showNI(false));
  }, [route.params?.props]);

  const onPress = () => {
    const query = {
      node: props.node,
      accountName: props.accountName,
      toAddress: props.address,
      amount: props.amount,
    };
    showNI(true);
    postWithdrawalCreate({access_token, query})
      .then(() => {
        navigation.navigate('Portfolio', {props: null});
        setTimeout(() => {
          Alert.alert('', i18n.t('t45'));
        });
      })
      .catch((e) => console.log(e.response))
      .finally(() => showNI(false));
  };

  return (
    <Wrap noScroll titleView={<Header step={4} title={i18n.t('t51')} />}>
      <View style={base.w1}>
        <View style={base.w2}>
          <View style={base.w3}>
            <Image source={Images.wallet} width={dw(20)} />
          </View>
          <View style={base.w4}>
            <Text style={base.t1}>{i18n.t('t46')}</Text>
            <View style={base.w2}>
              <Image source={Images[props.node]} width={dw(20)} />
              <Text style={base.t2}>{props.maskName || props.accountName}</Text>
            </View>
          </View>
        </View>
        <View style={base.w6} />
        <View style={base.w2}>
          <View style={base.w3}>
            <Image source={Images.qrCode} width={dw(20)} />
          </View>
          <View style={base.w4}>
            <Text style={base.t1}>{i18n.t('t47')}</Text>
            <View style={base.w2}>
              <Text style={base.t3}>{props.address}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={base.w7} />
      <View style={base.w8}>
        <View style={base.w2}>
          <Text style={base.t4}>{i18n.t('t42')}</Text>
          <View style={base.w9}>
            <Text style={base.t5}>
              {props.amount} {props.node}
            </Text>
            {/* <Text style={base.t6}>$1,087.18</Text> */}
          </View>
        </View>
      </View>
      <View style={base.w8}>
        <View style={base.w5}>
          <Text style={base.t4}>{i18n.t('t48')}</Text>
          <View style={base.w9}>
            <Text style={base.t5}>
              {fee} {props.node}
            </Text>
            <Text style={base.t7}>{i18n.t('t49')}</Text>
          </View>
        </View>
      </View>
      <View style={base.w7} />
      <View style={base.w8}>
        <View style={base.w2}>
          <Text style={base.t4}>{i18n.t('t50')}</Text>
          <View style={base.w9}>
            <Text style={base.t5}>
              {parseFloat(props.amount) + fee} {props.node}
            </Text>
            {/* <Text style={base.t6}>$0</Text> */}
          </View>
        </View>
      </View>
      <View style={base.flex} />
      <Button
        style={base.w10}
        color="#009F06"
        title={i18n.t('t7')}
        onPress={onPress}
      />
    </Wrap>
  );
}
