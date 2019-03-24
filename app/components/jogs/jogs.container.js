import React from 'react';
import PropTypes from 'prop-types';
import jogsProps from './mockData';

import Jogs from './jogs';

class JogsContainer extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    jogs: jogsProps
  }
  
  checkDate = jog => {
    const {startDate, endDate} = this.state;

    return jog.filter(el => {
      if (el.date >= startDate && el.date <= endDate) {
        return true;
      }
    });
  };

  render() {
    const {startDate, endDate, jogs} = this.state;

    return (
      <Jogs 
        startDate={startDate}
        endDate={endDate}
        jogs={startDate && endDate ? this.checkDate(jogs) : jogs}
      />
    );
  }
}

JogsContainer.propTypes = {

};

export default JogsContainer;
