import React from 'react';
import HomePresenter from './HomePresenter';

import { connect } from 'react-redux';

const HomeContainer = props => {
  console.log(props);
  return (
    <div>
      <h1>
        Current Number : <strong>{props.counter}</strong>
        <div>
          <button onClick={() => props.increment()}>Increment</button>
          <button onClick={() => props.decrement()}>Decrement</button>
        </div>
      </h1>
    </div>
  );
};

const mapToStateProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREASE' }),
    decrement: () => dispatch({ type: 'DECREASE' }),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(HomeContainer);
