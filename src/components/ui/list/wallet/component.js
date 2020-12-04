import React from 'react';
import {FlatList, View} from 'react-native';

// Components
import Item from 'item/wallet';

// Helpers
import {sortByAZ, sortByZA, sortByMaxBalance, sortByMinBalance} from 'helpers';

// Style
import {base} from './style';

export default function List({account, filter}) {
  const renderItem = ({item}) => <Item {...item} />;
  const renderSeparatorComponent = () => <View style={base.w2} />;

  function sort() {
    switch (filter) {
      case 0: {
        return account.sort(sortByAZ);
      }
      case 1: {
        return account.sort(sortByZA);
      }
      case 2: {
        return account.sort(sortByMaxBalance);
      }
      case 3: {
        return account.sort(sortByMinBalance);
      }
      default: {
        return account;
      }
    }
  }

  return (
    <FlatList
      data={sort()}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={renderSeparatorComponent}
      contentContainerStyle={base.w1}
    />
  );
}
