import {put, all} from 'redux-saga/effects';

export function* _catch(error, title) {
  console.log(`${title} ->`, error.response);
  if (error.response) {
    switch (error.response.status) {
      case 401: {
        yield put({type: 'postLogout'});
        return;
      }
      case 422: {
        const {errors} = error.response.data;
        for (const prop in errors) {
          yield all(errors[prop].map((e) => put({type: 'toast', data: e})));
        }
        return;
      }
      default: {
        yield put({type: 'toast', data: error.response.data.message});
      }
    }
  } else {
    console.log(`${title} ->`, error);
    yield put({type: 'toast', data: error.message});
  }
}

export function groupByKey(array, key) {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) {
      return hash;
    }
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
}
