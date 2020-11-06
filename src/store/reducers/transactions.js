const initialState = [];

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    case 'transactionAll': {
      return action.data;
    }
    default:
      return state;
  }
}
