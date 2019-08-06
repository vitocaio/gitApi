import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';


let singleStore = null;

export const getStore = () => singleStore;

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );
  const store = createStore(rootReducer, preloadedState, enhancer);
  singleStore = store;
  return store;
}
