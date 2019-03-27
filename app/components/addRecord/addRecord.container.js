import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AddRecord from './addRecord';
import { connect } from 'react-redux';

class AddRecordContainer extends React.Component {
  state = {
    date: null
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');

    if (!token) {
      this.props.history.push('/');
    }
  }

  onDateChange = date => {
    this.setState({date});
  }

  onBackClick = () => {
    this.props.history.goBack();
  }

  handleSubmit = event => {
    event.preventDefault();

    //we should validate with Yup and Formik, but I don't have time for this
    if(!this.state.date || !event.target.time.value || !event.target.distance.value) {
      alert('Choose date, time and distance');
      return;
    }

    if(!(this.state.date instanceof Date) || isNaN(+event.target.time.value) || isNaN(+event.target.distance.value)) {
      alert('Date must be a valid date, time and distance must be number');
      return;
    }

    let formData = new FormData();
    formData.append('date', this.state.date);
    formData.append('time', event.target.time.value);
    formData.append('distance', event.target.distance.value);
    axios.post('https://jogtracker.herokuapp.com/api/v1/data/jog', formData, {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      }
    })
      .then(() => this.props.history.goBack())
      .catch(err => console.log(err));
  }

  render() {
    const {date} = this.state;
  
    return (
      <AddRecord
        onBackClick={this.onBackClick} 
        onDateChange={this.onDateChange} 
        date={date}
        handleSubmit={this.handleSubmit}
        expandMenu={this.props.expandMenu}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    expandMenu: state.expandMenu
  };
};

AddRecordContainer.propTypes = {
  history: PropTypes.object.isRequired,
  expandMenu: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(AddRecordContainer);
