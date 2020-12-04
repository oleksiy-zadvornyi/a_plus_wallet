import axios from 'axios';

import {axiosConfigToken, getParams, URL} from './index';

export function getDepositCreate(body) {
  return axios.get(
    `${URL}/deposit/create${getParams(body.query)}`,
    axiosConfigToken(body.access_token),
  );
}
