import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Home from './home';

class HomeContainer extends React.Component {
  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      this.props.history.push('/jogs');
    }
  }

  handleLogin = () => {
    let formData = new FormData();
    formData.append('uuid', 'hello');
  
    axios.post('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => window.localStorage.setItem('token', res.data.response.access_token))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Home handleLogin={this.handleLogin}/>
    );
  }
}

HomeContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default HomeContainer;
