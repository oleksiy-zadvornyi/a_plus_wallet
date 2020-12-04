import {put} from 'redux-saga/effects';
import moment from 'moment';

import {_catch, groupByKey} from 'helpers';
import * as Api from '../api/account';

function getTransactionsSort(account) {
  return account.data.map((e) => {
    const group = groupByKey(
      e.transactions.map((k) => {
        return {date: moment(k.createdAt).format('DD MMMM, YYYY'), ...k};
      }),
      'date',
    );
    const transactions = Object.keys(group)
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

    return {
      ...e,
      transactions,
    };
  });
}

export function* fetchGetAccountAll(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const account = yield Api.getAccountAll(action.data);
    const data = getTransactionsSort(account);

    yield put({type: 'accountAll', data});
  } catch (error) {
    yield* _catch(error, 'fetchGetAccountAll');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchPostAccountCreate(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    yield Api.postAccountCreate(action.data);
    const {access_token} = action.data;
    const account = yield Api.getAccountAll({access_token});
    const data = getTransactionsSort(account);

    yield put({type: 'accountAll', data});
  } catch (error) {
    yield* _catch(error, 'fetchPostAccountCreate');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
