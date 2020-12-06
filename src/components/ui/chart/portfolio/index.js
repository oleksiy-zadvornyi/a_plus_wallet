/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';
import {View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dw from 'hooks/useDesignWidth';

// Components
import Button from 'button';
import ModalList from 'modal/list';

// Api
import {getAccountBalancePeriod} from 'store/api/account';
import {getUserBalancePeriod} from 'store/api/user';

// Style
import {base} from './style';

function Chart({wallet, user, cryptoWallets}) {
  const {access_token} = user;
  const [scale] = useState('W');
  const [cryptoCurrency, setCryptoCurrency] = useState('BTC');
  const [data, setData] = useState([]);
  const [crypto, setCrypto] = useState(false);
  // const [period, setPeriod] = useState(false);
  // const periodList = [
  //   {
  //     name: 'за неделю',
  //     value: 'W',
  //   },
  //   {
  //     name: 'за месяц',
  //     value: 'M',
  //   },
  //   {
  //     name: 'за год',
  //     value: 'Y',
  //   },
  // ];
  const cryptoList = cryptoWallets.map((e) => {
    return {name: e.currencyFulName, value: e.currencyCode};
  });

  useEffect(() => {
    if (wallet) {
      const query = {scale, accountName: wallet.accountName};
      getAccountBalancePeriod({access_token, query})
        .then((result) => setData(result.data))
        .catch((e) => console.log(e));
    } else {
      const query = {scale, cryptoCurrency};
      getUserBalancePeriod({access_token, query})
        .then((result) => setData(result.data))
        .catch((e) => console.log(e));
    }
  }, [wallet, scale, cryptoCurrency]);

  function getData() {
    const labels = data.map((e) => moment(e.period).format('D.M'));
    const datasets = [
      {
        data: data.map((e) => e.balanceCurrencie),
      },
    ];
    return {
      labels,
      datasets,
    };
  }

  function onPressSelectCrypto(c) {
    setCryptoCurrency(c);
    setCrypto(false);
  }
  // function onPressSelectPeriod(p) {
  //   setScale(p);
  //   setPeriod(false);
  // }

  if (data.length > 0) {
    return (
      <View>
        {wallet && <Text style={base.t2}>{wallet.maskName}</Text>}
        <LineChart
          data={getData()}
          width={wp(100) - dw(8)}
          height={dw(200)}
          withDots={false}
          // withShadow={false}
          segments={3}
          chartConfig={{
            backgroundGradientFrom: '#141D33',
            backgroundGradientTo: '#141D33',
            fillShadowGradient: 'rgb(113, 184, 209)',
            fillShadowGradientOpacity: 1,
            // useShadowColorFromDataset: true,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
        />
        <View style={base.w1}>
          {!wallet && (
            <Button
              style={base.w2}
              title="Криптовалюта"
              color="#009F06"
              onPress={() => setCrypto(true)}
            />
          )}

          {/* <Button
            style={base.w2}
            title="Период"
            color="#009F06"
            onPress={() => setPeriod(true)}
          /> */}
        </View>
        <ModalList
          isVisible={crypto}
          list={cryptoList}
          onPressSelect={onPressSelectCrypto}
          onPressClose={() => setCrypto(false)}
        />
        {/* <ModalList
          isVisible={period}
          list={periodList}
          onPressSelect={onPressSelectPeriod}
          onPressClose={() => setPeriod(false)}
        /> */}
      </View>
    );
  }
  return null;
}

function mapStateToProps(state) {
  return {
    user: state.user,
    cryptoWallets: state.cryptoWallets,
  };
}

export default connect(mapStateToProps, null)(Chart);
