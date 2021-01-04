import axios from 'axios';
export const URL = 'https://api.bigfootbridge.com';

axios.defaults.headers.common['Service-Destination'] = 'wallet';

export const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const axiosConfigToken = (token) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return headers;
};

export const getParams = (data) => {
  let params = [];

  if (data) {
    Object.keys(data).forEach((prop) => {
      params = [...params, `${prop}=${data[prop]}`];
    });
  }

  if (params.length > 0) {
    return `?${params.join('&')}`;
  }

  return '';
};
