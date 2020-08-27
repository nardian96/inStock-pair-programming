import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

import App from "./App";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// ####COMPONENTS TO BE ADDED FOR ROUTES####
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Router>
      {/* <Header /> ###HEADER TO BE ADDED### */}
      <Header />
      <Redirect from="/" to="/Warehouse" />
      <Switch>
        <Route path="/Warehouse" component={App} exact />
        <Route path="/Warehouse/:warehouseId" component={App} exact />
        <Route path="/Inventory" component={App} exact />
        <Route path="/Inventory/:inventoryId" component={App} exact />
<<<<<<< HEAD
=======
        <Route path="/*" component={NotFound} />
>>>>>>> front-end-header-component
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
