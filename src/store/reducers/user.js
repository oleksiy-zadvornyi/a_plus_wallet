const initialState = {
  balance: [],
  pin: '',
  useTouchId: false,
};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'reduceSignup':
    case 'reduceLogin': {
      return {...state, ...action.data};
    }
    case 'reduceFirstName': {
      return {...state, firstName: action.data};
    }
    case 'reduceSecondName': {
      return {...state, secondName: action.data};
    }
    case 'reduceVerifyEmail': {
      return {...state, isEmailVerified: true};
    }
    case 'reduceBalance': {
      return {...state, balance: action.data};
    }
    case 'reducePin': {
      return {...state, pin: action.data};
    }
    case 'reduceUseTouchId': {
      return {...state, useTouchId: action.data};
    }
    case 'fetchLogout': {
      return initialState;
    }
    default:
      return state;
  }
}
