import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AddRecord from './addRecord';

class AddRecordContainer extends React.Component {
  state = {
    date: null
  }

  onDateChange = date => {
    this.setState({date});
  }

  onBackClick = () => {
    this.props.history.goBack();
  }

  handleSubmit = event => {
    event.preventDefault();

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
      />
    );
  }
}

AddRecordContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default AddRecordContainer;
