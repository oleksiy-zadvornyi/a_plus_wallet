import {combineReducers} from 'redux';

import toast from './toast';
import networkIndicator from './networkIndicator';

import user from './user';
import transactions from './transactions';

export default combineReducers({
  toast,
  networkIndicator,

  user,
  transactions,
});
