import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as filterActions from 'resources/filter/filter.actions';

import Header from './header';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header applyFilter={this.props.applyFilter} setFilter={this.props.setFilter} />
    );
  }
}

const mapStateToProps = state => {
  return {
    applyFilter: state.filter.applyFilter
  };
};

const mapDispatchToProps = {
  setFilter: filterActions.setFilter
};

HeaderContainer.propTypes = {
  applyFilter: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
