import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Sass/App.css";
import WarehouseDetails from "./components/WarehouseDetail";
import WarehouseInfo from "./components/WarehouseInfo";

export default class App extends Component {
  state = {
    inventory: [],
    products: [],
    warehouse: [],
  };

  componentDidMount() {}

  render() {
    return (
      <div className="instock">
        <Switch>
          <Route
            path="/warehouse/:id"
            render={() => (
              <WarehouseDetails
                warehouseItems={this.state.inventory}
                WarehouseInfo={this.state.warehouse}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
