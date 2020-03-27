import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../../store/actions/counter.action';
import HomePresenter from './HomePresenter';

const HomeContainer = props => {
  return <HomePresenter {...props} />;
};

const mapToStateProps = ({ counter }) => ({
  counter,
});

export default connect(mapToStateProps, { increase, decrease })(HomeContainer);
