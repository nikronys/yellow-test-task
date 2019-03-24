import React from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const {date} = this.state;
  
    return (
      <AddRecord
        onBackClick={this.onBackClick} 
        onDateChange={this.onDateChange} 
        date={date}
      />
    );
  }
}

AddRecordContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default AddRecordContainer;
