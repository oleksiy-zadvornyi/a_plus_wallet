const initialState = false;

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'reduceUsePin': {
      return action.data;
    }
    case 'fetchLogout': {
      return initialState;
    }
    default:
      return state;
  }
}
