import { combineReducers } from 'redux';

import {jogs} from './jogs/jogs.reducer';
import {filter} from './filter/filter.reducer';
import {createResponsiveStateReducer} from 'redux-responsive';

const reducers = {
  jogs,
  filter,
  browser: createResponsiveStateReducer({
    mobile: 576
  }),
};

export default combineReducers(reducers);