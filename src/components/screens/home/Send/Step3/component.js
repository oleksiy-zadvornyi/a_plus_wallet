import React from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'react-native-switch';
import {useNavigation} from '@react-navigation/native';
import dw from 'hooks/useDesignWidth';

// Components
import Wrap from 'base/Wrap';
import Header from 'header/send';
import Button from 'button';
import Input from 'input/send/step3';

// Style
import {base} from './style';

export default function Step3() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Step4');
  };

  return (
    <Wrap noScroll titleView={<Header step={3} title="Сумма" />}>
      <Input placeholder="0" title="BTC" />
      <View style={base.w1} />
      <Input placeholder="0" title="$" />
      <View style={base.flex} />
      <View style={base.w2}>
        <View style={base.w3}>
          <Text style={base.t1}>Всего доступно</Text>
          <Text style={base.t2}>0.09625 BTC</Text>
        </View>
        <View style={base.w4}>
          <Text style={base.t3}>Макс.сумма</Text>
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
      <Button style={base.w5} title="Продолжить" onPress={onPress} />
    </Wrap>
  );
}
