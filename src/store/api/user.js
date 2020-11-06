import axios from 'axios';

import {axiosConfig, axiosConfigToken, getParams, URL} from './index';

export function getLogin(body) {
  return axios.get(`${URL}/login${getParams(body.query)}`, axiosConfig);
}
export function getUser(body) {
  return axios.get(`${URL}/user`, axiosConfigToken(body.access_token));
}

export function postSignup(body) {
  return axios.post(`${URL}/signup${getParams(body.query)}`, null, axiosConfig);
}
