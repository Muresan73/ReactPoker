import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import HomePage from "./components/Home/home";

// eslint-disable-next-line no-unused-vars
const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/:id" component={App} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default AppRouter;
