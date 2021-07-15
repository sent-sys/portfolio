import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/portfolio" />
        </Route>
        <Route path="/portfolio">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
