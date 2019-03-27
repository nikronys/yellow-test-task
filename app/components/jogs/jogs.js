import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { css } from '@emotion/core';
import CircleLoader from 'react-spinners/ClipLoader';

import 'react-datepicker/dist/react-datepicker.css';

import JogIcon from 'assets/jog.js';
import AddButtonIcon from 'assets/add-button.js';
import SadFace from 'assets/sad-face.js';

import Routing from 'common/routing/routing';
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

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Jogs = props => {
  const {
    startDate,
    endDate,
    jogs,
    onStartDateChange,
    onEndDateChange,
    createJog,
    loading,
    expandMenu
  } = props;

  const renderRunStatistic = (run, index) => {
    return (
      <RunElement index={index} lastElementIndex={jogs.length - 1} key={run.id}>
        <JogIcon />
        <RunData>
          <RunDataElement>{moment(run.date * 1000).format('DD.MM.YYYY')}</RunDataElement>
          <RunDataElement><Bold>Speed:</Bold> {Math.round(run.distance / run.time)} km/min</RunDataElement>
          <RunDataElement><Bold>Distance:</Bold> {run.distance} km</RunDataElement>
          <RunDataElement><Bold>Time:</Bold> {run.time} min</RunDataElement>
        </RunData>
      </RunElement>
    );
  };

  return (
    <React.Fragment>
      <Header />
      {expandMenu 
        ? <Routing />
        :
        <React.Fragment>
          <DatePickersContainer>
            <Text>Date from</Text>
            <DatePicker selected={startDate} onChange={onStartDateChange}/>
            <Text>Date to</Text>
            <DatePicker selected={endDate} onChange={onEndDateChange}/>
          </DatePickersContainer>
          <Main loading={loading && !expandMenu}>
            {loading ? 
              <CircleLoader
                css={override}
                sizeUnit={'px'}
                size={150}
                color={'#123abc'}
                loading={loading}
              /> :
              jogs.length 
                ? 
                <RunList>
                  {jogs.map(renderRunStatistic)}
                </RunList>
                :
                <EmptyJogsContainer>
                  <SadFace />
                  <EmptyJogsTitle>Nothing is here</EmptyJogsTitle>
                  <EmptyJogsButton onClick={createJog}>Create your jog first</EmptyJogsButton>
                </EmptyJogsContainer>
            }
          </Main>
        </React.Fragment>}
      {!!jogs.length && !loading && !expandMenu &&
        <AddButton onClick={createJog}>
          <AddButtonIcon />
        </AddButton>
      }
    </React.Fragment>
  );
};

Jogs.propTypes = {
  createJog: PropTypes.func.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  jogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.string.isRequired, //eslint-disable-line
    distance: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  expandMenu: PropTypes.bool.isRequired
};

export default Jogs;
