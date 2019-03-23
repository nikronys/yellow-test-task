import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'assets/logo.js';

import {HeaderWrapper, Link} from './header.styles.js';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href='/'>
        <Logo/>
      </Link>
    </HeaderWrapper>
  );
};

Header.propTypes = {

};

export default Header;
