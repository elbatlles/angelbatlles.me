import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import { Crypto } from "../views/Crypto";
import { Profile } from "../views/Profile";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/crypto" component={Crypto} />
            <Route component={Profile} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};
