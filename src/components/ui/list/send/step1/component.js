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
    navigation.navigate('Step2', {props: account[itemIndex]});
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
        Выберите кошелек на котором{'\n'}
        мы будем генерировать адрес.
      </Text>
      <FlatList
        data={account}
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
    account: state.account.filter((e) => e.isActive && e.balance > 0),
  };
}

export default connect(mapStateToProps, null)(List);
