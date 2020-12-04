import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

// Components
import Item from 'item/choiceCrypto';
import Input from 'input/choiceCrypto';

// Style
import {base} from './style';

export default function List({cryptoWallets}) {
  const [finder, setFinder] = useState('');

  function sort() {
    if (finder.length > 0) {
      return cryptoWallets.filter((e) =>
        e.currencyFulName.toLowerCase().startsWith(finder.toLowerCase()),
      );
    }
    return cryptoWallets;
  }
  function onChangeText(text) {
    setFinder(text);
  }

  const renderItem = ({item}) => <Item {...item} />;
  const renderSeparatorComponent = () => <View style={base.w1} />;

  return (
    <View>
      <Input onChangeText={onChangeText} />
      <FlatList
        data={sort()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparatorComponent}
      />
    </View>
  );
}
