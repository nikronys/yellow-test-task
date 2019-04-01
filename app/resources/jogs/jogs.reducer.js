import { SET_JOGS } from './jogs.actions';

export const jogs = (state = [], action) => {
  switch (action.type) {
  case SET_JOGS:
    return action.payload;
  default:
    return state;
  }
};

export default jogs;