import { INCREASE, DECREASE } from '../typs';

const initialState = 0;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREASE:
      return state + payload;
    case DECREASE:
      return state + payload;
    default:
      return state;
  }
};
