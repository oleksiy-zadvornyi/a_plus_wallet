import axios from 'axios';

import {axiosConfigToken, URL} from './index';

export function getCurrencyCryptoAllActive(body) {
  return axios.get(
    `${URL}/currency/crypto/all/active`,
    axiosConfigToken(body.access_token),
  );
}
