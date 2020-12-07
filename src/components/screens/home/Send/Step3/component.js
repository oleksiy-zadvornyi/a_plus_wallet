import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'react-native-switch';
import {useNavigation, useRoute} from '@react-navigation/native';
import dw from 'hooks/useDesignWidth';
import i18n from 'i18n-js';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/send';
import Button from 'button';
import Input from 'input/send/step3';

// Style
import {base} from './style';

export default function Step3() {
  const navigation = useNavigation();
  const route = useRoute();
  const refCrypto = useRef(null);
  const props = route.params?.props ?? {};

  const onPress = () => {
    const crypto = refCrypto.current.getValue();
    if (crypto.length > 0) {
      navigation.navigate('Step4', {props: {...props, amount: crypto}});
    }
  };

  return (
    <Wrap noScroll titleView={<Header step={3} title={i18n.t('t42')} />}>
      <Input ref={refCrypto} placeholder="0" title={props.node} />
      <View style={base.w1} />
      <Input placeholder="0" title="$" />
      <View style={base.flex} />
      <View style={base.w2}>
        <View style={base.w3}>
          <Text style={base.t1}>{i18n.t('t43')}</Text>
          <Text style={base.t2}>
            {props.balance} {props.node}
          </Text>
        </View>
        <View style={base.w4}>
          <Text style={base.t3}>{i18n.t('t44')}</Text>
          <Switch
            renderActiveText={false}
            renderInActiveText={false}
            backgroundInactive="#444444"
            circleBorderWidth={0}
            circleSize={dw(20)}
            barHeight={dw(30)}
            switchWidthMultiplier={2.8}
          />
        </View>
      </View>
      <Button
        style={base.w5}
        title={i18n.t('t41')}
        color="#009F06"
        onPress={onPress}
      />
    </Wrap>
  );
}
