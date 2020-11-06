import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import Item from 'item/receive';
import Button from 'button';

// Style
import {base} from './style';

export default function List() {
  const data = [1, 1, 1, 1];
  const [itemIndex, setIndex] = useState(-1);
  const navigation = useNavigation();

  const onChange = (ind) => {
    setIndex(ind);
  };
  const onPress = () => {
    navigation.navigate('ReceiveGenerate');
  };

  const renderItem = ({item, index}) => (
    <Item
      {...item}
      index={index}
      isSelect={itemIndex === index}
      onChange={onChange}
    />
  );
  const renderSeparatorComponent = () => <View style={base.w2} />;

  return (
    <View style={base.w1}>
      <Text style={base.t1}>
        Выберите кошелек с которого{'\n'}
        будем совершать отправку.
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparatorComponent}
      />

      <Button
        style={base.w3}
        title="Продолжить"
        color="#009F06"
        disabled={itemIndex < 0}
        onPress={onPress}
      />
    </View>
  );
}
