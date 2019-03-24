import React from 'react';
import PropTypes from 'prop-types';

import BearFace from 'assets/bear-face.js';

import Header from 'common/header/header.container';
import {FormBox, Main, SaveButton} from './addJog.styles.js';

const AddJog = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <FormBox>
          <BearFace />
          <SaveButton>Save</SaveButton>
        </FormBox>
      </Main> 
    </React.Fragment>
  );
};

AddJog.propTypes = {

};

export default AddJog;
