import {
  NAVIGATE,
  BACK
} from './navigation.actions';

import { HOME } from 'utils/routes';

const initialState = {
  currentRoute: HOME,
  history: [],
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
  case NAVIGATE:
    return {
      currentRoute: action.route,
      history: [...state.history, state.currentRoute],
    };
  case BACK:
    return {
      currentRoute: state.history[state.history.length - 2],
      history: state.history.slice(0, -2),
    };
  default:
    return state;
  }
};

export default navigation;
