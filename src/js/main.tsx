import '../styles/app.sass';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Store, createStore, applyMiddleware, compose } from 'redux';
import * as thunk from 'redux-thunk';
import { List } from 'immutable';
import { rootReducer } from './modules/reducers';
import { routes } from './config/routes';
import * as promiseMiddleware from 'redux-promise-middleware';

// Redux Dev Tools
let devTools = f => f;
if (window.devToolsExtension) {
  devTools = window.devToolsExtension();
}

// Middlewares
const middlewares: Array<Redux.Middleware> = [
  thunk,
  promiseMiddleware(),
];

// Set initial state
const initialState = {};

// Create store
const store = compose(applyMiddleware(...middlewares), devTools)(createStore);
const finalStore = store(rootReducer, initialState);

// Render the application
ReactDOM.render(
  <Provider store={finalStore}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('main')
);
