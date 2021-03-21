import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import styles from './Header.scss';
import Container from '../../components/Container/Container';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header className={styles.component}>
    <Container>
      <img src={settings.logo} alt={settings.alt} className={styles.logo}></img>

    </Container>
  </header>
)

Header.propTypes = {

}

export default Header;