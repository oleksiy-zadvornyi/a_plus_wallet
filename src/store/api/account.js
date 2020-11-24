import axios from 'axios';

import {axiosConfigToken, URL} from './index';

export function getAccountAll(body) {
  return axios.get(`${URL}/account/all`, axiosConfigToken(body.access_token));
}
