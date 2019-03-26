import React from 'react';

import {Main, Link} from './routing.styles';

const Routing = () => {
  return (
    <Main>
      <Link href='/jogs'>JOGS</Link>
      <Link href='/info'>INFO</Link>
      <Link href='/contact-us'>CONTACT US</Link>
    </Main> 
  );
};

export default Routing;
