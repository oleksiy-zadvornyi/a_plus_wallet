import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {FlatList, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import Item from 'item/receive';
import Button from 'button';

// Api
import {getAccountAll} from 'store/api/account';

// Actions
import {showNetworkIndicator} from 'actions';

// Style
import {base} from './style';

function List({access_token, showNI}) {
  const [itemIndex, setIndex] = useState(-1);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    showNI(true);
    getAccountAll({access_token})
      .then((result) => setData(result.data))
      .catch((e) => console.log(e))
      .finally(() => showNI(false));
  }, [access_token, showNI]);

  const onChange = (ind) => {
    setIndex(ind);
  };
  const onPress = () => {
    navigation.navigate('Step2');
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

function mapStateToProps(state) {
  return {
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showNI: (data) => dispatch(showNetworkIndicator(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
