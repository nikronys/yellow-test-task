import React from 'react';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

import CancelIcon from 'assets/cancel.js';

import Header from 'common/header/header.container';
import {
  FormBox, 
  Main, 
  Cancel, 
  SaveButton,
  DatePicker,
  InputWithDescription,
  Description,
  Input
} from './addRecord.styles.js';

const AddRecord = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <FormBox>
          <Cancel>
            <CancelIcon />
          </Cancel>
          <InputWithDescription>
            <Description>Distance</Description>
            <Input type='number'/>
          </InputWithDescription>
          <InputWithDescription>
            <Description>Time</Description>
            <Input type='number'/>
          </InputWithDescription>
          <InputWithDescription>
            <Description>Date</Description>
            <DatePicker />
          </InputWithDescription>
          <SaveButton>Save</SaveButton>
        </FormBox>
      </Main> 
    </React.Fragment>
  );
};

AddRecord.propTypes = {

};

export default AddRecord;
