import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from 'components/home/home.container';
import Jogs from 'components/jogs/jogs.container';
import AddRecord from 'components/addRecord/addRecord.container';
import Info from 'components/info/info.container';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/jogs" component={Jogs}/>
          <Route path="/add-record" component={AddRecord}/>
          <Route path="/info" component={Info}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
