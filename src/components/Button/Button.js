import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <a className={styles.component}>
    {children}
  </a>
)

Button.propTypes = {
  children: PropTypes.any,
}

export default Button;