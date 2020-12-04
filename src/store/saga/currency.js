import {put} from 'redux-saga/effects';

import {_catch} from 'helpers';
import * as Api from '../api/currency';

export function* fetchGetCurrencyCryptoAllActive(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const crypto = yield Api.getCurrencyCryptoAllActive(action.data);

    yield put({type: 'cryptoAll', data: crypto.data});
  } catch (error) {
    yield* _catch(error, 'fetchGetAccountAll');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
