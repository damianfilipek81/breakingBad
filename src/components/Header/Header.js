import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import styles from './Header.scss';
import Container from '../../components/Container/Container';
import { NavLink, Link } from 'react-router-dom';
import Button from '../Button/Button';

const Header = () => (
  <header>
    <Container>
      <Link to={'/'}><img src={settings.logo} alt={settings.alt} className={styles.logo}></img></Link>
      <Link to={'/betterCallSaul'}><img src={settings.logoBCS} alt={settings.alt} className={styles.logo}></img></Link>
      <div className={styles.nav}>
        <nav>
          <NavLink to='/info'>Info</NavLink>
        </nav>
      </div>
    </Container>
  </header>
)

Header.propTypes = {

}

export default Header;