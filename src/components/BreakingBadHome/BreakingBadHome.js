import React from 'react';
import PropTypes from 'prop-types';
import Home from '../Home/Home';
import {settings} from '../../data/dataStore';

const BreakingBadHome = ({characters}) => (
  <div>
    <Home characters={characters} title={settings.breakingBadTitle}></Home>
  </div>
)

BreakingBadHome.propTypes = {
  characters: PropTypes.array,
}

export default BreakingBadHome;