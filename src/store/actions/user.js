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

export function fetchSetFirstName(data) {
  return {
    type: 'fetchSetFirstName',
    data,
  };
}

export function fetchSetSecondName(data) {
  return {
    type: 'fetchSetSecondName',
    data,
  };
}

export function fetchUserAcceptEmail(data) {
  return {
    type: 'fetchUserAcceptEmail',
    data,
  };
}

export function fetchUserAccountsBalance(data) {
  return {
    type: 'fetchUserAccountsBalance',
    data,
  };
}

export function fetchLogout() {
  return {
    type: 'fetchLogout',
  };
}

export function reducePin(data) {
  return {
    type: 'reducePin',
    data,
  };
}

export function reduceUseTouchId(data) {
  return {
    type: 'reduceUseTouchId',
    data,
  };
}

export function reduceUsePin(data) {
  return {
    type: 'reduceUsePin',
    data,
  };
}
