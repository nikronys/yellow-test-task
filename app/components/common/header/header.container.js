import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as filterActions from 'resources/filter/filter.actions';
import * as menuActions from 'resources/menu/menu.actions';

import Header from './header';

class HeaderContainer extends React.Component {
  componentWillUnmount() {
    if (this.props.expandMenu) {
      this.props.closeMenu();
    }
  }

  render() {
    const {applyFilter, setFilter, isMobile, openMenu, expandMenu, closeMenu} = this.props;

    return (
      <Header 
        applyFilter={applyFilter} 
        setFilter={setFilter} 
        isMobile={isMobile}
        openMenu={openMenu}
        expandMenu={expandMenu}
        closeMenu={closeMenu}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    applyFilter: state.filter.applyFilter,
    isMobile: state.browser.is.mobile,
    expandMenu: state.expandMenu
  };
};

const mapDispatchToProps = {
  setFilter: filterActions.setFilter,
  openMenu: menuActions.openMenu,
  closeMenu: menuActions.closeMenu
};

HeaderContainer.propTypes = {
  applyFilter: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
  expandMenu: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
