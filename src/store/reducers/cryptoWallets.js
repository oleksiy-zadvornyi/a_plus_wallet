const initialState = [];

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'cryptoAll': {
      return action.data;
    }
    default:
      return state;
  }
}
