import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CounterText = styled.h1`
  font-size: 50px;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`;

const Button = styled.button`
  cursor: pointer;
  border: 0;
  outline: none;
  margin: 0;
  padding: 24px 32px;
  font-size: 21px;
  text-transform: uppercase;
  transition: all 0.2s;
  &:first-of-type:hover {
    color: blue;
  }
  &:last-of-type:hover {
    color: red;
  }
`;

const HomePresenter = ({ counter, increase, decrease }) => {
  return (
    <Container>
      <CounterText>
        Current Number : <strong>{counter}</strong>
      </CounterText>
      <ButtonBox>
        <Button onClick={increase}>increase</Button>
        <Button onClick={decrease}>decrease</Button>
      </ButtonBox>
    </Container>
  );
};

HomePresenter.propTypes = {
  counter: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

export default HomePresenter;
