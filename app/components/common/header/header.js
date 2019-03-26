import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';

import Logo from 'assets/logo.js';
import Filter from 'assets/filter.js';
import FilterActive from 'assets/filter-active.js';
import Menu from 'assets/menu.png';
import CancelIcon from 'assets/cancel.js';

import {HeaderWrapper, Link, Navigation, NavLink, FilterButton, MenuButton, Cancel} from './header.styles.js';

const Header = ({
  isMobile, 
  theme, 
  location, 
  applyFilter, 
  setFilter,
  openMenu,
  expandMenu,
  closeMenu
}) => {
  return (
    <HeaderWrapper expandMenu={expandMenu}>
      <Link href='/'>
        <Logo 
          height={isMobile && theme.header.headerIconMobileHeight}
          width={isMobile && theme.header.headerIconMobileWidth}
          backgroundColor={expandMenu && theme.common.green}
        />
      </Link>
      <Navigation>
        {isMobile  
          ? 
          expandMenu 
            ? 
            <Cancel onClick={closeMenu}>
              <CancelIcon backgroundColor={expandMenu && theme.common.grey}/>
            </Cancel>
            :
            <MenuButton onClick={openMenu}>
              <img src={Menu} alt="Menu"/>
            </MenuButton>
          : location.pathname !== '/' && (
            <React.Fragment>
              <NavLink currentPath={location.pathname} href='/jogs'>JOGS</NavLink>
              <NavLink currentPath={location.pathname} href='/info'>INFO</NavLink>
              <NavLink addMargin={applyFilter} currentPath={location.pathname} href='/contact-us'>CONTACT US</NavLink>
              <FilterButton  onClick={setFilter}>
                {applyFilter 
                  ? <Filter /> 
                  : <FilterActive />
                }
              </FilterButton>
            </React.Fragment>
          )}
      </Navigation>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  applyFilter: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
  expandMenu: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default withRouter(withTheme(Header));
