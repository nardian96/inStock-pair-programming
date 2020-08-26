import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// ####COMPONENTS TO BE ADDED FOR ROUTES####
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Header /> ###HEADER TO BE ADDED### */}
      <Redirect from="/" to="/Warehouse" />
      <Switch>
        <Route path="/Warehouse" component={} exact />
        <Route path="/Warehouse/:warehouseId" component={} exact />
        <Route path="/Inventory" component={} exact />
        <Route path="/Inventory/:inventoryId" component={} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
