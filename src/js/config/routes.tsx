import * as React from 'react';
import Home from '../containers/Home';
import { Route, IndexRoute } from 'react-router';

const routes = (
  <Route path='/' component={Home}>
  </Route>
);

export { routes };
