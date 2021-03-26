import React from 'react';
import PropTypes from 'prop-types';
import Home from '../Home/Home';
import {settings} from '../../data/dataStore';

const BetterCallSaulHome = ({characters}) => (
  <div>
    <Home characters={characters} title={settings.betterCallSaulTitle}></Home>
  </div>
)

BetterCallSaulHome.propTypes = {
  characters: PropTypes.array,
}

export default BetterCallSaulHome;