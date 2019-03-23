import React from 'react';
import {Route} from 'react-router';

import Home from 'components/home/home.container';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Home}/>
      </React.Fragment>
    );
  }
}

export default App;
