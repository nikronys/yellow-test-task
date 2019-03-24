import React from 'react';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

import JogIcon from 'assets/jog.js';
import AddButtonIcon from 'assets/add-button.js';
import SadFace from 'assets/sad-face.js';

import Header from 'common/header/header.container';
import {
  DatePickersContainer, 
  Main, 
  Text, 
  DatePicker, 
  RunData, 
  RunList, 
  RunElement,
  RunDataElement,
  AddButton,
  Bold,
  EmptyJogsContainer,
  EmptyJogsTitle,
  EmptyJogsButton
} from './jogs.styles.js';

const Jogs = props => {
  const {
    startDate,
    endDate,
    jogs
  } = props;

  const renderRunStatistic = (run, index) => {
    return (
      <RunElement key={`${run.date + index + run.speed}`} resetMargin={index === jogs.length - 1}>
        <JogIcon />
        <RunData>
          <RunDataElement resetMargin>{run.date}</RunDataElement>
          <RunDataElement><Bold>Speed:</Bold> {run.speed}</RunDataElement>
          <RunDataElement><Bold>Distance:</Bold> {run.distance} km</RunDataElement>
          <RunDataElement><Bold>Time:</Bold>: {run.time} min</RunDataElement>
        </RunData>
      </RunElement>
    );
  };

  return (
    <React.Fragment>
      <Header />
      <DatePickersContainer>
        <Text>Date from</Text>
        <DatePicker selected={startDate}/>
        <Text>Date to</Text>
        <DatePicker selected={endDate}/>
      </DatePickersContainer>
      <Main>
        {jogs.length 
          ? 
          <RunList>
            {jogs.map(renderRunStatistic)}
          </RunList>
          :
          <EmptyJogsContainer>
            <SadFace />
            <EmptyJogsTitle>Nothing is here</EmptyJogsTitle>
            <EmptyJogsButton>Create your jog first</EmptyJogsButton>
          </EmptyJogsContainer>
        }
      </Main>
      <AddButton>
        <AddButtonIcon />
      </AddButton> 
    </React.Fragment>
  );
};

Jogs.propTypes = {

};

export default Jogs;
