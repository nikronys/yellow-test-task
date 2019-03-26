import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {responsiveStoreEnhancer} from 'redux-responsive';

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      responsiveStoreEnhancer,
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, //eslint-disable-line
    ),
  );

  return store;
};

export default configureStore({});