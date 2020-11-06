import {put} from 'redux-saga/effects';

import {_catch} from 'helpers';
import * as Api from '../api/user';

export function* fetchSignup(action) {
  try {
    const {userName, password, email} = action.data;

    yield put({type: 'networkIndicator', data: true});
    const signup = yield Api.postSignup({
      query: {
        userName,
        password,
        email,
      },
    });
    const login = yield Api.getLogin({
      query: {
        userName,
        password,
      },
    });
    yield put({
      type: 'reduceSignup',
      data: {...signup.data, ...login.data},
    });
  } catch (error) {
    yield* _catch(error, 'fetchSignup');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchLogin(action) {
  try {
    const {userName, password} = action.data;

    // yield put({ type: "networkIndicator", data: true });
    const login = yield Api.getLogin({
      query: {
        userName,
        password,
      },
    });
    const user = yield Api.getUser({access_token: login.data.access_token});
    yield put({
      type: 'reduceLogin',
      data: {...user.data, ...login.data},
    });
  } catch (error) {
    yield* _catch(error, 'fetchLogin');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
