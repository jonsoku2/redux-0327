import React from 'react';
import PropTypes from 'prop-types';

const HomePresenter = ({ counter, increase, decrease }) => {
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

HomePresenter.propTypes = {
  counter: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

export default HomePresenter;
