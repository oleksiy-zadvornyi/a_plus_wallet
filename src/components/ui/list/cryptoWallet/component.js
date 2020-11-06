import React from 'react';
import {FlatList, View} from 'react-native';

// Components
import Item from 'item/cryptoWallet';
import Button from 'button/icon';

// Helpers
import * as Images from 'helpers/images';

// Style
import {base} from './style';

export default function List() {
  const data = [1, 1];

  const renderItem = ({item}) => <Item {...item} />;

  return (
    <View style={base.flex}>
      <View style={base.w1}>
        <Button
          style={base.flex}
          title="Получить"
          color="#009F06"
          icon={Images.transactionUp}
        />
        <Button
          style={base.flex}
          title="Отправить"
          icon={Images.transactionDown}
        />
        <Button icon={Images.refresh} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
