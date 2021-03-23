import React from 'react';
import PropTypes from 'prop-types';
import Home from '../Home/Home';

const BetterCallSaul = ({characters}) => (
  <div>
    <Home characters={characters}></Home>
  </div>
)

BetterCallSaul.propTypes = {
  characters: PropTypes.array,
}

export default BetterCallSaul;