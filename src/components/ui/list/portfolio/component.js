import React from 'react';
import {FlatList} from 'react-native';

// Components
import Item from 'item/portfolio';
import Chart from 'chart/portfolio';

export default function List({transactions, wallet}) {
  const renderItem = ({item}) => <Item {...item} />;

  return (
    <FlatList
      data={wallet ? wallet.transactions : transactions}
      renderItem={renderItem}
      ListHeaderComponent={() => <Chart wallet={wallet} />}
      keyExtractor={(item) => item.date}
    />
  );
}
