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

  createJog = () => {
    this.props.history.push('/add-record');
  }

  render() {
    const {startDate, endDate, jogs} = this.state;

    return (
      <Jogs 
        startDate={startDate}
        endDate={endDate}
        jogs={startDate && endDate ? this.checkDate(jogs) : jogs}
        createJog={this.createJog}
      />
    );
  }
}

JogsContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default JogsContainer;
