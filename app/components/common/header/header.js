import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import Logo from 'assets/logo.js';
import Filter from 'assets/filter.js';
import FilterActive from 'assets/filter-active.js';

import {HeaderWrapper, Link, Navigation, NavLink, FilterButton} from './header.styles.js';

const Header = props => {
  return (
    <HeaderWrapper>
      <Link href='/'>
        <Logo/>
      </Link>
      {props.location.pathname === '/' 
        ? null
        : 
        <Navigation>
          <NavLink currentPath={props.location.pathname} href='/jogs'>JOGS</NavLink>
          <NavLink currentPath={props.location.pathname} href='/info'>INFO</NavLink>
          <NavLink addMargin={props.applyFilter} currentPath={props.location.pathname} href='/contact-us'>CONTACT US</NavLink>
          <FilterButton  onClick={props.setFilter}>
            {props.applyFilter 
              ? <Filter /> 
              : <FilterActive />
            }
          </FilterButton>
        </Navigation>
      }
    </HeaderWrapper>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  applyFilter: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default withRouter(Header);
