import { INCREASE, DECREASE } from '../typs';

export const increase = () => dispatch => {
  dispatch({ type: INCREASE, payload: 1 });
};

export const decrease = () => dispatch => {
  dispatch({ type: DECREASE, payload: -1 });
};
