import React from 'react';
import PropTypes from 'prop-types';
import * as jogsActions from 'resources/jogs/jogs.actions';
import * as filterActions from 'resources/filter/filter.actions';
import { connect } from 'react-redux';

import Jogs from './jogs';

class JogsContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.props.getJogs()
      .then(() => this.setState({ loading: false }));
  }
  
  checkDate = jogs => {
    const {startDate, endDate} = this.props;

    return jogs.filter(el => {
      if (el.date >= startDate.getTime() / 1000 && el.date <= endDate.getTime() / 1000) {
        return true;
      }
    });
  };

  createJog = () => {
    this.props.history.push('/add-record');
  }

  render() {
    const {loading} = this.state;
    const {startDate, endDate, jogs, setStartDate, setEndDate, expandMenu} = this.props;

    return (
      <Jogs 
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        jogs={startDate && endDate ? this.checkDate(jogs) : jogs}
        createJog={this.createJog}
        expandMenu={expandMenu}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    jogs: state.jogs,
    startDate: state.filter.startDate,
    endDate: state.filter.endDate,
    expandMenu: state.expandMenu
  };
};

const mapDispatchToProps = {
  getJogs: jogsActions.getJogs,
  setStartDate: filterActions.setStartDate,
  setEndDate: filterActions.setEndDate
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
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
  expandMenu: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(JogsContainer);
