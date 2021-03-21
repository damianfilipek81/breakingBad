import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';

const Container = ({children}) => (
  <div className={styles.component}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;