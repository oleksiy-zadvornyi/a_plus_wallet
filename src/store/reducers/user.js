const initialState = {};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'reduceSignup':
    case 'reduceLogin': {
      return action.data;
    }
    case 'fetchLogout': {
      return initialState;
    }
    default:
      return state;
  }
}
