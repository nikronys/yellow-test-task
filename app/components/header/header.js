import React from 'react';
import PropTypes from 'prop-types';

import {HeaderWrapper, Logo} from './header.styles.js';

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <a href="/">
          <Logo />
        </a>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {

};

export default Header;
