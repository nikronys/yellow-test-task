import { SET_START_DATE, SET_END_DATE, APPLY_FILTER } from './filter.actions';

const initialValues = {
  startDate: null,
  endDate: null,
  applyFilter: false
};

export const filter = (state = initialValues, action) => {
  switch (action.type) {
  case SET_START_DATE:
    return {...state, startDate: action.payload};
  case SET_END_DATE:
    return {...state, endDate: action.payload};
  case APPLY_FILTER:
    return {...state, applyFilter: action.payload};
  default:
    return state;
  }
};

export default filter;