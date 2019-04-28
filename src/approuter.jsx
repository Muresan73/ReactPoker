import React from 'react';
import { Router, Link } from '@reach/router';
import App from './components/App/App';
import HomePage from './components/Home/home';

// eslint-disable-next-line no-unused-vars
const AppRouter = props => (
  <Router>
    <App path=":query" query="query" p={props} />
    <HomePage path="/" />
  </Router>
);

export default AppRouter;
