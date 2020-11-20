import React from 'react';
import {FlatList} from 'react-native';

// Components
import Item from 'item/portfolio';

export default function List({transactions}) {
  const renderItem = ({item}) => <Item {...item} />;
  console.log(transactions);
  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item.date}
    />
  );
}
