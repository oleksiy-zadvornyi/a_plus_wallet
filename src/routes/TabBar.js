import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import i18n from 'i18n-js';

// import ModalTransfer from 'modal/transfer';

// Helpers
import * as Images from 'helpers/images';

// Hooks
import dw from 'hooks/useDesignWidth';

export function TabBar({navigation}) {
  const [show, setShow] = useState(false);
  const routes = [
    {
      key: 'summary',
      name: i18n.t('t95'),
      onPress: 'Portfolio',
    },
    {
      key: 'wallets',
      name: i18n.t('t75'),
      onPress: 'Wallet',
    },
    {
      key: 'transfer',
      name: i18n.t('t97'),
      onPress: 'Services',
    },
    {
      key: 'settings',
      name: i18n.t('t71'),
      onPress: 'Settings',
    },
    {
      key: 'profile',
      name: i18n.t('t68'),
      onPress: 'Profile',
    },
  ];

  // function onPressClose() {
  //   setShow(false);
  // }

  return (
    <View style={base.flexDirection}>
      {routes.map((route) => {
        const onPress = () => {
          if (route.onPress === 'ModalTransfer') {
            setShow(true);
          } else if (route.onPress === 'Portfolio') {
            navigation.navigate(route.onPress, {props: null});
          } else {
            navigation.navigate(route.onPress);
          }
        };

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={base.wrap}>
            <Image source={Images[route.key]} height={20} />
            <Text style={base.text}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
      {/* <ModalTransfer
        navigation={navigation}
        isVisible={show}
        onPressClose={onPressClose}
      /> */}
    </View>
  );
}

const base = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: wp(1.5),
    paddingBottom: Platform.OS === 'ios' ? wp(5) : wp(1.5),
  },
  flexDirection: {
    flexDirection: 'row',
    backgroundColor: '#232F4E',
    borderTopColor: 'white',
    borderTopWidth: dw(1),
  },
  text: {
    fontSize: wp(3),
    color: 'white',
  },
});
