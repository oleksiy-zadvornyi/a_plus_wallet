const initialState = {
  locale: '',
  emptyAccount: false,
};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'reduceLocale': {
      return {...state, locale: action.data};
    }
    case 'reduceEmptyAccount': {
      return {...state, emptyAccount: action.data};
    }
    default:
      return state;
  }
}
