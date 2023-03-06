import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import root from './reducer/root'; 

export const store = createStore(
  root,
  applyMiddleware(thunkMiddleware)
);
