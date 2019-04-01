import { SET_START_DATE, SET_END_DATE } from './filter.actions';

const initialValues = {
  startDate: null,
  endDate: null
};

export const filter = (state = initialValues, action) => {
  switch (action.type) {
  case SET_START_DATE:
    return {...state, startDate: action.payload};
  case SET_END_DATE:
    return {...state, endDate: action.payload};
  default:
    return state;
  }
};

export default filter;