import { INCREASE, DECREASE } from '../typs';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + action.payload;
    case DECREASE:
      return state + action.payload;
    default:
      return state;
  }
};
