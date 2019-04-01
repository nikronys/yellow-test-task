import React from 'react';
import PropTypes from 'prop-types';

import Home from './home';
import { connect } from 'react-redux';

import {login} from 'resources/jogs/jogs.api';

class HomeContainer extends React.Component {
  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      this.props.history.push('/jogs');
    }
  }

  render() {
    return (
      <Home 
        expandMenu={this.props.expandMenu} 
        isMobile={this.props.isMobile} 
        handleLogin={login}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isMobile: state.browser.is.mobile,
    expandMenu: state.expandMenu
  };
};

HomeContainer.propTypes = {
  history: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  expandMenu: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(HomeContainer);
