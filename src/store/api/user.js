import axios from 'axios';

import {axiosConfig, axiosConfigToken, getParams, URL} from './index';

export function getLogin(body) {
  return axios.get(`${URL}/login${getParams(body.query)}`, axiosConfig);
}

export function getUser(body) {
  return axios.get(`${URL}/user`, axiosConfigToken(body.access_token));
}

export function getUserAccountsBalance(body) {
  return axios.get(
    `${URL}/user/accounts/balance`,
    axiosConfigToken(body.access_token),
  );
}

export function getUserChangePassword(body) {
  return axios.get(
    `${URL}/user/changepassword${getParams(body.query)}`,
    axiosConfigToken(body.access_token),
  );
}

export function getUserBalancePeriod(body) {
  return axios.get(
    `${URL}/user/balance/period${getParams(body.query)}`,
    axiosConfigToken(body.access_token),
  );
}

export function postSetFirstName(body) {
  return axios.post(
    `${URL}/set/firstname${getParams(body.query)}`,
    null,
    axiosConfigToken(body.access_token),
  );
}

export function postSetSecondName(body) {
  return axios.post(
    `${URL}/set/secondname${getParams(body.query)}`,
    null,
    axiosConfigToken(body.access_token),
  );
}

export function postUserAcceptEmail(body) {
  return axios.post(
    `${URL}/user/acceptemail${getParams(body.query)}`,
    null,
    axiosConfigToken(body.access_token),
  );
}

export function postSignup(body) {
  return axios.post(`${URL}/signup${getParams(body.query)}`, null, axiosConfig);
}
