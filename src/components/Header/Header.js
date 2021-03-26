import React from 'react';
import { settings } from '../../data/dataStore';
import styles from './Header.scss';
import Container from '../../components/Container/Container';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <Container>
    <header className={styles.wrapper}>
      <div className={styles.wrapper}>
        <Link to={'/'}><img src={settings.logo} alt={settings.alt} className={styles.logo}></img></Link>
        <Link to={'/betterCallSaul'}><img src={settings.logoBCS} alt={settings.alt} className={styles.logo}></img></Link>
      </div>
      <nav>
        <NavLink to='/favorites' className={styles.button}>Favorites</NavLink>
        <NavLink to='/info' className={styles.button}>Info</NavLink>
        <NavLink to='/faq' className={styles.button}>FAQ</NavLink>
      </nav>
    </header>
  </Container>
)

Header.propTypes = {

}

export default Header;