import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {fetchGetTransactionAll} from 'actions/transaction';

import {TabBar} from './TabBar';
import Portfolio from 'screens/home/Portfolio';
import Wallet from 'screens/home/Wallet';
import Settings from 'screens/home/Settings';
import Profile from 'screens/home/Profile';
import Receive from 'screens/home/Receive';

import Step1 from 'screens/home/Send/Step1';
import Step2 from 'screens/home/Send/Step2';
import Step3 from 'screens/home/Send/Step3';
import Step4 from 'screens/home/Send/Step4';
import Step5 from 'screens/home/Send/Step5';

import ReceiveGenerate from 'screens/home/ReceiveGenerate';
import Transaction from 'screens/home/Transaction';
import CryptoWallet from 'screens/home/CryptoWallet';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const options = {title: null, gestureEnabled: false};

function StackRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Portfolio" component={Portfolio} options={options} />
      <Stack.Screen name="Wallet" component={Wallet} options={options} />
      <Stack.Screen name="Settings" component={Settings} options={options} />
      <Stack.Screen name="Profile" component={Profile} options={options} />
      <Stack.Screen name="Receive" component={Receive} options={options} />

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
    </Stack.Navigator>
  );
}

function Home({access_token, getTransactionAll}) {
  useEffect(() => {
    getTransactionAll({access_token});
  });

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Tab" component={StackRoute} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
  return {
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTransactionAll: (data) => dispatch(fetchGetTransactionAll(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
