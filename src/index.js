import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from "./App";
import {loadState, saveState} from './utils/localStorage';
import filmsApp from "./store/reducers";



const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();
const store = createStore(filmsApp, persistedState, composeEnhancers(applyMiddleware(logger, thunk)));

store.subscribe(() => {
  saveState({
    srv: store.getState().srv,
    flm: store.getState().flm
  });
});

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));

