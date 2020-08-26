import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import "./index.css";
//import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// ####COMPONENTS TO BE ADDED FOR ROUTES####
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Header /> ###HEADER TO BE ADDED### */}
      <Redirect from="/" to="/Warehouse" />
      <Switch>
        <Route path="/Warehouse" component={App} exact />
        {/* <Route path="/Warehouse/:warehouseId" component={} exact />
        <Route path="/Inventory" component={} exact />
        <Route path="/Inventory/:inventoryId" component={} exact /> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
