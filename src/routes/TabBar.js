import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Helpers
import * as Images from 'helpers/images';

// Hooks
import dw from 'hooks/useDesignWidth';

export function TabBar({navigation}) {
  const routes = [
    {
      key: 'summary',
      name: 'Сводка',
      onPress: 'Portfolio',
    },
    {
      key: 'wallets',
      name: 'Кошельки',
      onPress: 'Wallet',
    },
    {
      key: 'transfer',
      name: 'Трансфер',
      onPress: 'Wallets',
    },
    {
      key: 'settings',
      name: 'Настройки',
      onPress: 'Settings',
    },
    {
      key: 'profile',
      name: 'Профиль',
      onPress: 'Profile',
    },
  ];

  return (
    <View style={base.flexDirection}>
      {routes.map((route) => {
        const onPress = () => {
          navigation.navigate(route.onPress);
        };

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={base.wrap}>
            <Image source={Images[route.key]} height={20} />
            <Text style={base.text}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
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
