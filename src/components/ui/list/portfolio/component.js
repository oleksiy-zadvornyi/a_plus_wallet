import React from 'react';
import {FlatList, Text, View} from 'react-native';
import i18n from 'i18n-js';

// Components
import Item from 'item/portfolio';
import Chart from 'chart/portfolio';

import {base} from './style';

export default function List({transactions, wallet}) {
  const renderItem = ({item}) => <Item {...item} />;

  return (
    <FlatList
      data={wallet ? wallet.transactions : transactions}
      renderItem={renderItem}
      ListHeaderComponent={() => <Chart wallet={wallet} />}
      ListEmptyComponent={
        <View style={base.w1}>
          <Text style={base.t1}>{i18n.t('t106')}</Text>
        </View>
      }
      keyExtractor={(item) => item.date}
    />
  );
}
