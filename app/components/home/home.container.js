import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Home from './home';
import { connect } from 'react-redux';

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
      .then(res => {
        window.localStorage.setItem('token', res.data.response.access_token);
        this.props.history.push('/jogs');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Home isMobile={this.props.isMobile} handleLogin={this.handleLogin}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMobile: state.browser.is.mobile
  };
};

HomeContainer.propTypes = {
  history: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(HomeContainer);
