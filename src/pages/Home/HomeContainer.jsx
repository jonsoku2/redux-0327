import React from 'react';
import { increase, decrease } from '../../store/actions/counter.action';
import { connect } from 'react-redux';

const HomeContainer = props => {
  return (
    <div>
      <h1>
        Current Number : <strong>{props.counter}</strong>
        <div>
          <button onClick={() => props.increase()}>increase</button>
          <button onClick={() => props.decrease()}>decrease</button>
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

export default connect(mapToStateProps, { increase, decrease })(HomeContainer);
