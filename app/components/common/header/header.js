import React from 'react';
import PropTypes from 'prop-types';

import logo from 'assets/logo@2x.png';

import {HeaderWrapper, Link, Logo} from './header.styles.js';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href='/'>
        <Logo src={logo} alt="Logo"/>
      </Link>
    </HeaderWrapper>
  );
};

Header.propTypes = {

};

export default Header;
