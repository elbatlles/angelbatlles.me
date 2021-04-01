import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Profile from "../src/views/Profile";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Profile />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
