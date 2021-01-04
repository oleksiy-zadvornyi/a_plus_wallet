import {put} from 'redux-saga/effects';
import i18n from 'i18n-js';

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

    yield put({type: 'networkIndicator', data: true});
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

export function* fetchSetFirstName(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    yield Api.postSetFirstName(action.data);
    yield put({type: 'reduceFirstName', data: action.data.query.FirstName});
  } catch (error) {
    yield* _catch(error, 'fetchSetFirstName');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchSetSecondName(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    yield Api.postSetSecondName(action.data);
    yield put({type: 'reduceSecondName', data: action.data.query.SecondName});
  } catch (error) {
    yield* _catch(error, 'fetchSetSecondName');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchUserAcceptEmail(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    yield Api.postUserAcceptEmail(action.data);
    yield put({type: 'reduceVerifyEmail'});
    yield put({
      type: 'toast',
      data: i18n.t('t111'),
    });
  } catch (error) {
    yield* _catch(error, 'fetchUserAcceptEmail');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}

export function* fetchUserAccountsBalance(action) {
  try {
    yield put({type: 'networkIndicator', data: true});
    const user = yield Api.getUserAccountsBalance(action.data);
    yield put({type: 'reduceBalance', data: user.data});
  } catch (error) {
    yield* _catch(error, 'fetchUserAccountsBalance');
  } finally {
    yield put({type: 'networkIndicator', data: false});
  }
}
