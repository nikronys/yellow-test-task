import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import BearFace from 'assets/bear-face.js';

import Header from 'common/header/header.container';
import {BackgroundBox, Main, LoginButton} from './home.styles.js';

const Home = ({handleLogin, theme, isMobile}) => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <BackgroundBox>
          <BearFace backgroundColor={isMobile && theme.home.background}/>
          <LoginButton onClick={handleLogin}>Let me in</LoginButton>
        </BackgroundBox>
      </Main> 
    </React.Fragment>
  );
};

Home.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export default withTheme(Home);
