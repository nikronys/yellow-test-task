import { combineReducers } from 'redux';

import {getJogsReducer as jogs} from './jogs/jogs.reducer';

const reducers = {
  jogs,
};

export default combineReducers(reducers);