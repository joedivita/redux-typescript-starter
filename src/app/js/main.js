import '../styles/app.sass';
import { hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('main')
);
