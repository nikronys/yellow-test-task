import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';

import Logo from 'assets/logo.js';
import Filter from 'assets/filter.js';
import FilterActive from 'assets/filter-active.js';

import {HeaderWrapper, Link, Navigation, NavLink, FilterButton} from './header.styles.js';

const Header = ({
  isMobile, 
  theme, 
  location, 
  applyFilter, 
  setFilter
}) => {
  return (
    <HeaderWrapper>
      <Link href='/'>
        <Logo 
          height={isMobile && theme.header.headerIconMobileHeight}
          width={isMobile && theme.header.headerIconMobileWidth}
        />
      </Link>
      {location.pathname === '/' 
        ? null
        : 
        <Navigation>
          {isMobile 
            ? null
            : (
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
      }
    </HeaderWrapper>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  applyFilter: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired
};

export default withRouter(withTheme(Header));
