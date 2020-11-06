import {takeLatest} from 'redux-saga/effects';

import * as User from './user';
import * as Transaction from './transaction';

function* dataSaga() {
  yield takeLatest('fetchSignup', User.fetchSignup);
  yield takeLatest('fetchLogin', User.fetchLogin);

  yield takeLatest(
    'fetchGetTransactionAll',
    Transaction.fetchGetTransactionAll,
  );
}

export default dataSaga;
