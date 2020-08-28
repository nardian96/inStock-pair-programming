// import Header from "./Header";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import Header from ".";
// import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// ####COMPONENTS TO BE ADDED FOR ROUTES####
ReactDOM.render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <App /> */}
    <Router>
      {/* <Header /> ###HEADER TO BE ADDED### */}
      <Redirect from="/" to="/warehouse" />
      <Switch>
        <Route path="/warehouse" component={App} exact />
        <Route path="/warehouse/:warehouseId" component={App} exact />
        <Route path="/Inventory" component={App} exact />
        <Route path="/Inventory/:inventoryId" component={App} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
