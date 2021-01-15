import React from 'react';
import {FlatList, View, Text} from 'react-native';
import i18n from 'i18n-js';
import {useNavigation} from '@react-navigation/native';

// Components
import Item from 'item/wallet';
import Button from 'button';

// Helpers
import {
  sortByAZ,
  sortByZA,
  sortByCurrencyAZ,
  sortByCurrencyZA,
  sortByMaxBalance,
  sortByMinBalance,
} from 'helpers';

// Style
import {base} from './style';

export default function List({account, emptyAccount, filter}) {
  const navigation = useNavigation();
  const renderItem = ({item}) => <Item {...item} />;
  const renderSeparatorComponent = () => <View style={base.w2} />;

  function sort() {
    switch (filter) {
      case 0: {
        if (emptyAccount) {
          return account.filter((e) => e.balance > 0).sort(sortByAZ);
        }
        return account.sort(sortByAZ);
      }
      case 1: {
        if (emptyAccount) {
          return account.filter((e) => e.balance > 0).sort(sortByZA);
        }
        return account.sort(sortByZA);
      }
      case 2: {
        if (emptyAccount) {
          return account.filter((e) => e.balance > 0).sort(sortByCurrencyAZ);
        }
        return account.sort(sortByCurrencyAZ);
      }
      case 3: {
        if (emptyAccount) {
          return account.filter((e) => e.balance > 0).sort(sortByCurrencyZA);
        }
        return account.sort(sortByCurrencyZA);
      }
      case 4: {
        if (emptyAccount) {
          return account.filter((e) => e.balance > 0).sort(sortByMaxBalance);
        }
        return account.sort(sortByMaxBalance);
      }
      case 5: {
        if (emptyAccount) {
          return account.filter((e) => e.balance > 0).sort(sortByMinBalance);
        }
        return account.sort(sortByMinBalance);
      }
      default: {
        if (emptyAccount) {
          return account.filter((e) => e.balance > 0);
        }
        return account;
      }
    }
  }

  function onPressServices() {
    navigation.navigate('Services');
  }

  return (
    <View style={base.flex}>
      <FlatList
        data={sort()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparatorComponent}
        contentContainerStyle={base.w1}
        ListEmptyComponent={
          <View style={base.w4}>
            <Text style={base.t1}>{i18n.t('t108')}</Text>
          </View>
        }
      />
      <Button
        style={base.w3}
        title={i18n.t('t102')}
        color="#009F06"
        onPress={onPressServices}
      />
    </View>
  );
}
