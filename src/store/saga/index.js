import {takeLatest} from 'redux-saga/effects';

import * as User from './user';
import * as Transaction from './transaction';
import * as Account from './account';
import * as Currency from './currency';

function* dataSaga() {
  yield takeLatest('fetchSignup', User.fetchSignup);
  yield takeLatest('fetchLogin', User.fetchLogin);
  yield takeLatest('fetchSetFirstName', User.fetchSetFirstName);
  yield takeLatest('fetchSetSecondName', User.fetchSetSecondName);
  yield takeLatest('fetchUserAcceptEmail', User.fetchUserAcceptEmail);
  yield takeLatest('fetchUserAccountsBalance', User.fetchUserAccountsBalance);

  yield takeLatest(
    'fetchGetTransactionAll',
    Transaction.fetchGetTransactionAll,
  );

  yield takeLatest('fetchGetAccountAll', Account.fetchGetAccountAll);
  yield takeLatest('fetchPostAccountCreate', Account.fetchPostAccountCreate);

  yield takeLatest(
    'fetchGetCurrencyCryptoAllActive',
    Currency.fetchGetCurrencyCryptoAllActive,
  );
}

export default dataSaga;
