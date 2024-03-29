import React from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import i18n from 'i18n-js';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

function Header({user, wallet}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const onPressReceive = () => {
    if (wallet) {
      navigation.navigate('ReceiveGenerate', {props: wallet});
    } else {
      navigation.navigate('Receive');
    }
  };

  const onPressSend = () => {
    if (wallet) {
      navigation.navigate('Step2', {props: wallet});
    } else {
      navigation.navigate('Step1');
    }
  };

  function renderBalance() {
    if (wallet) {
      return (
        wallet.eqvBalance.find((e) => e.currencieCode === 'USD').balance || '0'
      );
    }

    const balance = user.balance.find((e) => e.currencyCode === 'USD');
    if (balance) {
      return balance.amount.toFixed(2);
    }

    return '0';
  }

  return (
    <View style={base.w8}>
      <View style={{height: insets.top, backgroundColor: 'white'}} />
      <View style={base.w7}>
        <View style={base.w2}>
          <View style={base.w1}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#1D2741', '#405896']}
              style={base.w2}>
              <View style={base.w3}>
                <View style={base.flex}>
                  <Text style={base.t1}>{i18n.t('t65')}</Text>
                  <Text style={base.t2}>
                    {wallet ? wallet.maskName : user.userName}
                  </Text>
                </View>
                {/* <View>
                <Image source={Images.bell} width={dw(22)} />
                <View style={base.dot} />
              </View> */}
              </View>
              <View style={base.w4}>
                <Text style={base.t3}>
                  $ <Text style={base.t4}>{renderBalance()}</Text>
                </Text>
                <Text style={base.t5}>{i18n.t('t66')}</Text>
              </View>
            </LinearGradient>
          </View>
          <View style={base.w5}>
            <TouchableOpacity style={base.w6} onPress={onPressReceive}>
              <Image source={Images.expense} height={dw(24)} />
              <Text style={base.t6}>{i18n.t('t67')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={base.w6} onPress={onPressSend}>
              <Image source={Images.withdrawal} height={dw(24)} />
              <Text style={base.t6}>{i18n.t('t7')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, null)(Header);
