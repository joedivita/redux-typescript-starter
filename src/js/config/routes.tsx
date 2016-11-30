import * as React from 'react';
import Main from '../containers/Main';
import { Route, IndexRoute } from 'react-router';

const routes = (
  <Route path='/' component={Main}>
  </Route>
);

export { routes };
