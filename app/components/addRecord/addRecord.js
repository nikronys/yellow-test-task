import React from 'react';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

import CancelIcon from 'assets/cancel.js';

import Routing from 'common/routing/routing';
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

const AddRecord = ({onDateChange, date, onBackClick, handleSubmit, expandMenu}) => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        {expandMenu
          ? <Routing />
          :
          <FormBox onSubmit={handleSubmit}>
            <Cancel type="button" onClick={onBackClick}>
              <CancelIcon/>
            </Cancel>
            <InputWithDescription>
              <Description>Distance</Description>
              <Input name='distance' type="text"/>
            </InputWithDescription>
            <InputWithDescription>
              <Description>Time</Description>
              <Input name='time' type="text"/>
            </InputWithDescription>
            <InputWithDescription>
              <Description>Date</Description>
              <DatePicker selected={date} onChange={onDateChange}/>
            </InputWithDescription>
            <SaveButton type="submit">Save</SaveButton>
          </FormBox>}
      </Main> 
    </React.Fragment>
  );
};

AddRecord.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  date: PropTypes.object,
  onBackClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  expandMenu: PropTypes.bool.isRequired
};

export default AddRecord;
