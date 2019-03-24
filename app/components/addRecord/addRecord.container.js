import React from 'react';
import PropTypes from 'prop-types';

import AddRecord from './addRecord';

class AddRecordContainer extends React.Component {
  state = {
    date: null
  }

  render() {
    const {date} = this.state;
  
    return (
      <AddRecord date={date}/>
    );
  }
}

AddRecordContainer.propTypes = {

};

export default AddRecordContainer;
