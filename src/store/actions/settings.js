export function reduceLocale(data) {
  return {
    type: 'reduceLocale',
    data,
  };
}

export function reduceEmptyAccount(data) {
  return {
    type: 'reduceEmptyAccount',
    data,
  };
}
