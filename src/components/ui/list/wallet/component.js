import React from 'react';
import {FlatList, View} from 'react-native';

// Components
import Item from 'item/wallet';

// Style
import {base} from './style';

export default function List() {
  const data = [1, 1, 1, 1];

  const renderItem = ({item}) => <Item {...item} />;
  const renderSeparatorComponent = () => <View style={base.w2} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={renderSeparatorComponent}
      contentContainerStyle={base.w1}
    />
  );
}
