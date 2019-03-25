import { GET_JOGS } from './jogs.actions';

export const jogs = (state = [], action) => {
  switch (action.type) {
  case GET_JOGS:
    return action.payload;
  default:
    return state;
  }
};

export default jogs;