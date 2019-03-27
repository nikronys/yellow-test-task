import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({isMobile}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? '20' : '26'} height={isMobile ? '20' : '26'} viewBox="0 0 26 26">
    <path fill="#FFF" fillRule="evenodd" d="M25.814.83c-.209-.478-.57-.717-1.086-.717H1.195C.681.113.32.353.111.83c-.209.503-.123.932.257 1.287l9.064 9.064v8.935c0 .32.117.595.35.828l4.706 4.706c.22.233.497.35.827.35.148 0 .3-.03.46-.092.478-.209.717-.57.717-1.085V11.181l9.064-9.064c.38-.355.466-.784.258-1.287z"/>
  </svg>
);

Filter.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Filter;