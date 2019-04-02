import React from 'react';
import PropTypes from 'prop-types';

import Home from './home';
import { connect } from 'react-redux';

import * as jogsActions from 'resources/jogs/jogs.api';
import * as navigationActions from 'resources/navigation/navigation.actions';
import {JOGS} from 'utils/routes';

class HomeContainer extends React.Component {
  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      this.props.navigate(JOGS);
    }
  }

  render() {
    return (
      <Home 
        expandMenu={this.props.expandMenu} 
        isMobile={this.props.isMobile} 
        handleLogin={this.props.login}
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

const mapDispatchToProps = {
  navigate: navigationActions.navigate,
  login: jogsActions.login
};

HomeContainer.propTypes = {
  navigate: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  expandMenu: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
