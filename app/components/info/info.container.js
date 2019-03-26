import React from 'react';
import PropTypes from 'prop-types';

import Info from './info';
import { connect } from 'react-redux';

class InfoContainer extends React.Component {
  componentDidMount() {
    const token = window.localStorage.getItem('token');

    if (!token) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <Info expandMenu={this.props.expandMenu}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    expandMenu: state.expandMenu
  };
};

InfoContainer.propTypes = {
  expandMenu: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(InfoContainer);
