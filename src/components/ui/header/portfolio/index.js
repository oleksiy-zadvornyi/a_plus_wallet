import React from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';

// Helpers
import * as Images from 'helpers/images';
import dw from 'hooks/useDesignWidth';

// Style
import {base} from './style';

function Header({user}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const onPressReceive = () => {
    navigation.navigate('Receive');
  };

  const onPressSend = () => {
    navigation.navigate('Step1');
  };

  return (
    <View style={base.w7}>
      <View style={base.w2}>
        <View style={base.w1}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#1D2741', '#405896']}
            style={[base.w2, {paddingTop: insets.top}]}>
            <View style={base.w3}>
              <View style={base.flex}>
                <Text style={base.t1}>Доброе утро</Text>
                <Text style={base.t2}>
                  {user.firstName} {user.secondName}
                </Text>
              </View>
              <View>
                <Image source={Images.bell} width={dw(22)} />
                <View style={base.dot} />
              </View>
            </View>
            <View style={base.w4}>
              <Text style={base.t3}>
                $ <Text style={base.t4}>0</Text>
              </Text>
              <Text style={base.t5}>Ваш баланс</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={base.w5}>
          <TouchableOpacity style={base.w6} onPress={onPressReceive}>
            <Image source={Images.expense} height={dw(24)} />
            <Text style={base.t6}>Получить</Text>
          </TouchableOpacity>
          <TouchableOpacity style={base.w6} onPress={onPressSend}>
            <Image source={Images.withdrawal} height={dw(24)} />
            <Text style={base.t6}>Отправить</Text>
          </TouchableOpacity>
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
