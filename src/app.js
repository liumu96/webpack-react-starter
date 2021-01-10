import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Autumn from "./routes/Autumn";
import Winter from "./routes/Winter";

export const App = () => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      <Navigation />
      {/* <Autumn />
      <Winter /> */}
      <Switch>
        <Route path="/autumn" component={Autumn} />
        <Route path="/winter" component={Winter} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Fragment>
);
