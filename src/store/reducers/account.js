const initialState = [];

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'accountAll': {
      return action.data;
    }
    default:
      return state;
  }
}
