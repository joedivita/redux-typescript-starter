import * as React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import { Route, IndexRoute } from 'react-router';

const routes = (
  <Route path="/" component={MainLayout}>
  </Route>
);

export { routes };
