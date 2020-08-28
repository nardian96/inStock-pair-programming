import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

import App from "./App";
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
    {/* <Header />
    <App /> */}
    <Router>
      {/* <Header /> ###HEADER TO BE ADDED### */}
      <Header />
      {/* <Redirect from="/" to="/warehouse" /> */}
      <Switch>
        <Route path="/warehouse" component={App} exact />
        <Route path="/warehouse/:warehouseId" component={App} />
        <Route path="/Inventory" component={App} exact />
        <Route path="/Inventory/:inventoryId" component={App} exact />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
