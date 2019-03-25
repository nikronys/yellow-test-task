import { combineReducers } from 'redux';

import {jogs} from './jogs/jogs.reducer';
import {filter} from './filter/filter.reducer';

const reducers = {
  jogs,
  filter
};

export default combineReducers(reducers);