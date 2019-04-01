import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as menuActions from 'resources/menu/menu.actions';

import Header from './header';

class HeaderContainer extends React.Component {
  componentWillUnmount() {
    if (this.props.expandMenu) {
      this.props.closeMenu();
    }
  }

  render() {
    const {isMobile, openMenu, expandMenu, closeMenu, startDate, endDate} = this.props;

    return (
      <Header 
        isMobile={isMobile}
        openMenu={openMenu}
        expandMenu={expandMenu}
        closeMenu={closeMenu}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isMobile: state.browser.is.mobile,
    expandMenu: state.expandMenu,
    startDate: state.filter.startDate,
    endDate: state.filter.endDate
  };
};

const mapDispatchToProps = {
  openMenu: menuActions.openMenu,
  closeMenu: menuActions.closeMenu,
};

HeaderContainer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
  expandMenu: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
