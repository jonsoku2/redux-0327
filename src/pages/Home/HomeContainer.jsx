import React from 'react';
import PropTypes from 'prop-types';
import { increase, decrease } from '../../store/actions/counter.action';
import { connect } from 'react-redux';

const HomeContainer = ({ counter, increase, decrease }) => {
  return (
    <div>
      <h1>
        Current Number : <strong>{counter}</strong>
        <div>
          <button onClick={increase}>increase</button>
          <button onClick={decrease}>decrease</button>
        </div>
      </h1>
    </div>
  );
};

HomeContainer.propTypes = {
  counter: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

const mapToStateProps = ({ counter }) => ({
  counter,
});

export default connect(mapToStateProps, { increase, decrease })(HomeContainer);
