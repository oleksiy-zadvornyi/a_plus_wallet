import axios from 'axios';

import {axiosConfigToken, getParams, URL} from './index';

export function getAccountAll(body) {
  return axios.get(`${URL}/account/all`, axiosConfigToken(body.access_token));
}

export function getAccountBalancePeriod(body) {
  return axios.get(
    `${URL}/account/balance/period${getParams(body.query)}`,
    axiosConfigToken(body.access_token),
  );
}

export function postAccountCreate(body) {
  return axios.post(
    `${URL}/account/create${getParams(body.query)}`,
    null,
    axiosConfigToken(body.access_token),
  );
}
