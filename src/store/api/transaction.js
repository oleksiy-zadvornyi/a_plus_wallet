import axios from 'axios';

import {axiosConfig, axiosConfigToken, getParams, URL} from './index';

export function getTransactionAll(body) {
  return axios.get(
    `${URL}/transaction/all${getParams(body.query)}`,
    axiosConfigToken(body.access_token),
  );
}
