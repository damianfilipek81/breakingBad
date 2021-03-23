import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import styles from './Header.scss';
import Container from '../../components/Container/Container';
import { NavLink, Link } from 'react-router-dom';
import Button from '../Button/Button';

const Header = () => (
  <header
  className={styles.component}>
    <Container>
      <img src={settings.logo} alt={settings.alt} className={styles.logo}></img>
      <div className={styles.nav}>
        <Button>Info</Button>
      </div>
    </Container>
  </header>
)

Header.propTypes = {

}

export default Header;