/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {fetchGetTransactionAll} from 'actions/transaction';
import {fetchGetAccountAll} from 'actions/account';
import {fetchGetCurrencyCryptoAllActive} from 'actions/currency';
import {fetchUserAccountsBalance} from 'actions/user';

import {URL} from 'store/api';

import {TabBar} from './TabBar';
import Portfolio from 'screens/home/Portfolio';
import Wallet from 'screens/home/Wallet';
import Settings from 'screens/home/Settings';
import Profile from 'screens/home/Profile';
import Receive from 'screens/home/Receive';
import Services from 'screens/home/Services';

import Step1 from 'screens/home/Send/Step1';
import Step2 from 'screens/home/Send/Step2';
import Step3 from 'screens/home/Send/Step3';
import Step4 from 'screens/home/Send/Step4';
import Step5 from 'screens/home/Send/Step5';

import ReceiveGenerate from 'screens/home/ReceiveGenerate';
import Transaction from 'screens/home/Transaction';
import CryptoWallet from 'screens/home/CryptoWallet';
import ChoiceCrypto from 'screens/home/AddWallet/Step1';
import CryptoName from 'screens/home/AddWallet/Step2';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const options = {title: null};

function StackRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Portfolio" component={Portfolio} options={options} />
      <Stack.Screen name="Wallet" component={Wallet} options={options} />
      <Stack.Screen name="Settings" component={Settings} options={options} />
      <Stack.Screen name="Profile" component={Profile} options={options} />
      <Stack.Screen name="Receive" component={Receive} options={options} />
      <Stack.Screen name="Services" component={Services} options={options} />

      <Stack.Screen name="Step1" component={Step1} options={options} />
      <Stack.Screen name="Step2" component={Step2} options={options} />
      <Stack.Screen name="Step3" component={Step3} options={options} />
      <Stack.Screen name="Step4" component={Step4} options={options} />
      <Stack.Screen name="Step5" component={Step5} options={options} />

      <Stack.Screen
        name="ReceiveGenerate"
        component={ReceiveGenerate}
        options={options}
      />
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={options}
      />
      <Stack.Screen
        name="CryptoWallet"
        component={CryptoWallet}
        options={options}
      />
      <Stack.Screen
        name="ChoiceCrypto"
        component={ChoiceCrypto}
        options={options}
      />
      <Stack.Screen
        name="CryptoName"
        component={CryptoName}
        options={options}
      />
    </Stack.Navigator>
  );
}

function Home({
  access_token,
  userName,
  getTransactionAll,
  getAccountAll,
  getCurrencyCryptoAllActive,
  getUserAccountsBalance,
}) {
  useEffect(() => {
    getTransactionAll({access_token});
    getAccountAll({access_token});
    getCurrencyCryptoAllActive({access_token});
    getUserAccountsBalance({access_token});

    const signalR = require('@microsoft/signalr');
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`${URL}/notificationuserhub?userId=${userName}`)
      .build();

    // const connection = new signalR.HubConnectionBuilder()
    //   .withUrl(`${URL}/notificationuserhub?userId=${userName}`, {
    //     transport: signalR.HttpTransportType.LongPolling,
    //   })
    //   .withAutomaticReconnect([0, 3000, 5000, 10000, 15000, 30000])
    //   .build();

    connection.on('ReloadBalance', () => {
      getTransactionAll({access_token});
      getAccountAll({access_token});
      getCurrencyCryptoAllActive({access_token});
      getUserAccountsBalance({access_token});
    });

    connection.on('GetConnectionId', (data) => {
      // console.log(data);
    });

    connection.start().then(() => connection.invoke('GetConnectionId'));
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Tab" component={StackRoute} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
  return state.user;
}

function mapDispatchToProps(dispatch) {
  return {
    getTransactionAll: (data) => dispatch(fetchGetTransactionAll(data)),
    getAccountAll: (data) => dispatch(fetchGetAccountAll(data)),
    getCurrencyCryptoAllActive: (data) =>
      dispatch(fetchGetCurrencyCryptoAllActive(data)),
    getUserAccountsBalance: (data) => dispatch(fetchUserAccountsBalance(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
