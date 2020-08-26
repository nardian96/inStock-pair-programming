<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import App from './App';
=======
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
>>>>>>> 4f951995e6e1e8d5d5f5b9d24e344cdae24f869c

// ####COMPONENTS TO BE ADDED FOR ROUTES####
ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Header />
    <App />
=======
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
>>>>>>> 4f951995e6e1e8d5d5f5b9d24e344cdae24f869c
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
