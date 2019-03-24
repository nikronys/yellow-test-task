import React from 'react';
import PropTypes from 'prop-types';

import AddJog from './addJog';

class AddJogContainer extends React.Component {
  state = {
    date: null
  }

  render() {
    const {date} = this.state;
  
    return (
      <AddJog date={date}/>
    );
  }
}

AddJogContainer.propTypes = {

};

export default AddJogContainer;
