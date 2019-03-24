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

const AddRecord = ({onDateChange, date, onBackClick}) => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <FormBox>
          <Cancel onClick={onBackClick}>
            <CancelIcon />
          </Cancel>
          <InputWithDescription>
            <Description>Distance</Description>
            <Input/>
          </InputWithDescription>
          <InputWithDescription>
            <Description>Time</Description>
            <Input/>
          </InputWithDescription>
          <InputWithDescription>
            <Description>Date</Description>
            <DatePicker selected={date} onChange={onDateChange}/>
          </InputWithDescription>
          <SaveButton>Save</SaveButton>
        </FormBox>
      </Main> 
    </React.Fragment>
  );
};

AddRecord.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  date: PropTypes.object,
  onBackClick: PropTypes.func
};

export default AddRecord;
