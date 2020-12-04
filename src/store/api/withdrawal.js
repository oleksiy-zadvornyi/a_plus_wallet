import axios from 'axios';

import {axiosConfigToken, getParams, URL} from './index';

export function postWithdrawalCreate(body) {
  return axios.post(
    `${URL}/withdrawal/create${getParams(body.query)}`,
    null,
    axiosConfigToken(body.access_token),
  );
}
