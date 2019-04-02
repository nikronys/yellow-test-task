import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  HOME,
  JOGS,
  ADD_RECORD,
  INFO
} from 'utils/routes';

import Home from 'components/home/home.container';
import Jogs from 'components/jogs/jogs.container';
import AddRecord from 'components/addRecord/addRecord.container';
import Info from 'components/info/info.container';

class App extends React.Component {

  renderContent = () => {
    const { route } = this.props;
  
    switch (route) {
    case HOME:
      return <Home />;
    case JOGS:
      return <Jogs />;
    case ADD_RECORD:
      return <AddRecord />;
    case INFO:
      return <Info />;
    default:
      break;
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  route: state.navigation.currentRoute,
});

App.propTypes = {
  route: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(App);
