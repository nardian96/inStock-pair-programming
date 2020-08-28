import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Warehouse from "./components/WarehouseList/Warehouse";
import axios from "axios";
import "./Sass/App.css";
import WarehouseDetails from "./components/warehouseDetail/";
// import WarehouseInfo from "./components/WarehouseInfo/";

const warehouseApi = "http://localhost:8080/warehouse";

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
    this.displayWarehouseList();
    // set the initial state for inventories
    axios.get(`${api_url}inventories`).then((response) =>
      this.setState({
        inventory: response.data,
      })
    );
  }

  displayWarehouseList = () => {
    return axios.get(warehouseApi).then((response) => {
      console.log("Hello");
      this.setState({
        warehouse: response.data,
      });
    });
  };

  render() {
    const { warehouse } = this.state;

    if (!this.props.match) {
      return <p></p>;
    }

    if (
      this.props.match.path === `/Warehouse`
      // ${this.props.match.params.id}
    ) {
      const warehouseId = "2922c286-16cd-4d43-ab98-c79f698aeab0";
      // const warehouseId = this.props.match.params.id;
      console.log(this.props.match);
      const warehouse = this.state.warehouse.filter(
        (place) => place.id === warehouseId
      );
      const warehouseInventory = this.state.inventory.filter(
        (place) => place.warehouseID === warehouseId
      );
      return (
        <div className="instock">
          <WarehouseDetails
            warehouseItems={warehouseInventory}
            warehouseInfo={warehouse}
          />
        </div>
      );
    }

    return (
      <div className="instock">
        <Switch>
          {/* <Route
            path="/warehouse"
            exact
            render={() => <Warehouse warehouses={warehouse} />}
          /> */}
          {/* <Route
            path="/warehouse/:id"
            render={() => (
              <WarehouseDetails
                warehouseItems={this.state.inventory}
                WarehouseInfo={this.state.warehouse}
              />
            )}
          />*/}
          <Route
            path="/Inventory"
            render={() => <Inventory inventories={this.state.inventory} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}
