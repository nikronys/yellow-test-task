import React from 'react';
import PropTypes from 'prop-types';

import Header from 'common/header/header.container';
import Routing from 'common/routing/routing';

import {Title, Main, Description, TitleAndDescription} from './info.styles.js';

const Info = ({expandMenu}) => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        {expandMenu 
          ? <Routing />
          :
          <TitleAndDescription>
            <Title>INFO</Title>
            <Description>
              {
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially 
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.`
              }
            </Description>
            <Description>
              {
                `It is a long established fact that a reader will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                normal distribution of letters, as opposed to using 'Content here, content here', making it 
                look like readable English.`
              }
            </Description>
          </TitleAndDescription>}
      </Main> 
    </React.Fragment>
  );
};

Info.propTypes = {
  expandMenu: PropTypes.bool.isRequired
};

export default Info;
