//import "./styles/main.css";
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Sass/Apps.css";
import WarehouseDetails from "./components/WarehouseDetail";
import WarehouseInfo from "./components/WarehouseInfo";

import Inventory from "./components/Inventory";

//Api variables
const api_url = "http://localhost:8080/";

export default class App extends Component {
  state = {
    inventory: [],
    products: [],
    warehouse: [],
  };

  componentDidMount() {
    // set the initial state for inventories
    axios.get(`${api_url}inventories`).then((response) =>
      this.setState({
        inventory: response.data,
      })
    );
  }

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

          <Route
            path="/Inventory"
            render={() => <Inventory inventories={this.state.inventory} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}
