import React from 'react';
import {Route} from 'react-router-dom';

import Home from 'components/home/home.container';
import Jogs from 'components/jogs/jogs.container';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Jogs}/>
        <Route path="/jogs" component={Jogs}/>
        <Route path="/addJog" component={Jogs}/>
      </React.Fragment>
    );
  }
}

export default App;
