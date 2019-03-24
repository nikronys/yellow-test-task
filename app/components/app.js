import React from 'react';
import {Route} from 'react-router-dom';

import Home from 'components/home/home.container';
import Jogs from 'components/jogs/jogs.container';
import AddJog from 'components/addJog/addJog.container';
import Info from 'components/info/info.container';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Info}/>
        <Route path="/jogs" component={Jogs}/>
        <Route path="/add-jog" component={Jogs}/>
        <Route path="/info" component={Jogs}/>
      </React.Fragment>
    );
  }
}

export default App;
