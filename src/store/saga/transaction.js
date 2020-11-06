import {put} from 'redux-saga/effects';
import moment from 'moment';

import {_catch, groupByKey} from 'helpers';
import * as Api from '../api/transaction';

export function* fetchGetTransactionAll(action) {
  try {
    const {access_token} = action.data;
    yield put({type: 'networkIndicator', data: true});

    const transaction = yield Api.getTransactionAll({access_token});
    const group = groupByKey(
      transaction.data.map((e) => {
        return {date: moment(e.createdAt).format('DD MMMM, YYYY'), ...e};
      }),
      'date',
    );

    const array = Object.keys(group)
      .map((key) => {
        return {
          date: key,
          data: group[key].sort((a, b) => {
            const keyA = moment(a.createdAt);
            const keyB = moment(b.createdAt);
            if (keyA < keyB) {
              return 1;
            }
            if (keyA > keyB) {
              return -1;
            }
            return 0;
          }),
        };
      })
      .sort((a, b) => {
        const keyA = moment(a.date, 'DD MMMM, YYYY');
        const keyB = moment(b.date, 'DD MMMM, YYYY');
        if (keyA < keyB) {
          return 1;
        }
        if (keyA > keyB) {
          return -1;
        }
        return 0;
      });

    yield put({type: 'transactionAll', data: array});
  } catch (error) {
    yield* _catch(error, 'fetchGetTransactionAll');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
