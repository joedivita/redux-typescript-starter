/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-dom.d.ts" />
/// <reference path="../../../typings/react-router/react-router.d.ts" />
/// <reference path="../../../typings/react-router/history.d.ts" />

import '../styles/app.sass';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { hashHistory } from 'react-router';
import { routes } from './config/routes';

import { rootReducer } from './modules/reducers';
import { Store, createStore } from 'redux';

const initialState = {};
const store: Store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('main')
);
