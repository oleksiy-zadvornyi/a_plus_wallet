import React, {useState} from 'react';
import {connect} from 'react-redux';
import {FlatList, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import Item from 'item/receive';
import Button from 'button';

// Style
import {base} from './style';

function List({account}) {
  const [itemIndex, setIndex] = useState(-1);
  const navigation = useNavigation();

  const onChange = (ind) => {
    setIndex(ind);
  };
  const onPress = () => {
    navigation.navigate('ReceiveGenerate', {props: account[itemIndex]});
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
        data={account.filter((e) => e.isActive)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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

function mapStateToProps(state) {
  return {
    account: state.account,
  };
}

export default connect(mapStateToProps, null)(List);
