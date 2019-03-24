import React from 'react';
import {Route} from 'react-router-dom';

import Home from 'components/home/home.container';
import Jogs from 'components/jogs/jogs.container';
import addJog from 'components/addJog/addJog.container';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={addJog}/>
        <Route path="/jogs" component={Jogs}/>
        <Route path="/add-jog" component={Jogs}/>
      </React.Fragment>
    );
  }
}

export default App;
