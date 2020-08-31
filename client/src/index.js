import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import App from "./App";
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
      <Header />
      {/* <Redirect from="/" to="/Warehouse" /> */}
      <Switch>
        <Route
          path="/inventoryDetails/:warehouseId/:inventoryId"
          exact
          component={App}
        />
        <Route path="/warehouse/:warehouseId/edit" exact component={App} />
        <Route path="/warehouse/:warehouseId" exact component={App} />
        <Route path="/warehouse/add" exact component={App} />
        {/* <Route path="/warehouse" component={App} exact /> */}
        <Route path="/warehouse" render={(routerProps) => <App {...routerProps} />} />
        <Route path="/Inventory" component={App} exact />
        <Route path="/Inventory/:inventoryId" component={App} exact />
        <Route path="/Inventories" component={App} exact />
        <Route path="/Inventories/add" component={App} exact />
        <Route path="/Inventories/:inventoryId/edit" component={App} exact />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
