import '../styles/app.sass';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Store, createStore, applyMiddleware, compose } from 'redux';
import * as thunk from 'redux-thunk';
import { Map } from 'immutable';
import { rootReducer } from './modules/reducers';
import { routes } from './config/routes';

// Redux Dev Tools
let devTools = f => f;
if(window['devToolsExtension']) {
  devTools = window['devToolsExtension']();
}

// Middlewares
const middlewares: Array<Redux.Middleware> = [
  thunk
];

// Set initial state
const initialState = Map();

// Create store
const store = compose(applyMiddleware(...middlewares), devTools)(createStore)
const finalStore = store(rootReducer, initialState)

// Render the application
ReactDOM.render(
  <Provider store={finalStore}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('main')
);
