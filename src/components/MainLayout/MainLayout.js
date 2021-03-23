import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import background from '../../images/background.jpg';

const MainLayout = ({ children }) => (
  <div style={{
    backgroundImage: `url(${background})`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    backgroundAttachment: `fixed`,
  }}>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;