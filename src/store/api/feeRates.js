import axios from 'axios';

import {axiosConfigToken, getParams, URL} from './index';

export function postFeeRatesGet(body) {
  return axios.post(
    `${URL}/feerates/get${getParams(body.query)}`,
    null,
    axiosConfigToken(body.access_token),
  );
}
