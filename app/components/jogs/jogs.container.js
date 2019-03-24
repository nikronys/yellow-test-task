import React from 'react';
import PropTypes from 'prop-types';
import * as jogsActions from 'resources/jogs/jogs.actions';
import { connect } from 'react-redux';

import Jogs from './jogs';

class JogsContainer extends React.Component {
  state = {
    startDate: null,
    endDate: null
  }

  componentDidMount() {
    const {getJogs} = this.props;
    
    getJogs();
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

  onStartDateChange = date => {
    this.setState({startDate: date});
  }

  onEndDateChange = date => {
    this.setState({endDate: date});
  }

  render() {
    const {startDate, endDate} = this.state;
    const {jogs} = this.props;

    return (
      <Jogs 
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={this.onStartDateChange}
        onEndDateChange={this.onEndDateChange}
        jogs={startDate && endDate ? this.checkDate(jogs) : jogs}
        createJog={this.createJog}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    jogs: state.jogs
  };
};

const mapDispatchToProps = {
  getJogs: jogsActions.getJogs,
};

JogsContainer.propTypes = {
  history: PropTypes.object.isRequired,
  getJogs: PropTypes.func.isRequired,
  jogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.string.isRequired, //eslint-disable-line
    distance: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JogsContainer);
