import React from 'react';
import PropTypes from 'prop-types';

import BearFace from 'assets/bear-face.js';

import Header from 'common/header/header.container';
import {BackgroundBox, Main, LoginButton} from './home.styles.js';

const Home = ({handleLogin}) => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <BackgroundBox>
          <BearFace />
          <LoginButton onClick={handleLogin}>Let me in</LoginButton>
        </BackgroundBox>
      </Main> 
    </React.Fragment>
  );
};

Home.propTypes = {
  handleLogin: PropTypes.func.isRequired
};

export default Home;
