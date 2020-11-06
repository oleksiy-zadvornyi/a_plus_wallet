export function fetchSignup(data) {
  return {
    type: 'fetchSignup',
    data,
  };
}

export function fetchLogin(data) {
  return {
    type: 'fetchLogin',
    data,
  };
}

export function fetchLogout() {
  return {
    type: 'fetchLogout',
  };
}
