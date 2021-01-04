import {combineReducers} from 'redux';

import networkIndicator from './networkIndicator';
import toast from './toast';

import user from './user';
import transactions from './transactions';
import account from './account';
import cryptoWallets from './cryptoWallets';
import settings from './settings';

export default combineReducers({
  networkIndicator,
  toast,

  user,
  transactions,
  account,
  cryptoWallets,
  settings,
});
