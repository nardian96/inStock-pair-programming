import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Warehouse from "./components/WarehouseList/Warehouse";
import AddWarehouse from "./components/AddEditWarehouse/AddWarehouse";
import EditWarehouse from "./components/AddEditWarehouse/EditWarehouse";
import axios from "axios";
import "./Sass/App.css";
import WarehouseDetails from "./components/warehouseDetail/";
import InventoryDetails from "./components/InventoryDetail/";
import Inventory from "./components/Inventory";
// import WarehouseInfo from "./components/WarehouseInfo/";

const warehouseApi = "http://localhost:8080/warehouse";
const inventoryApi = "http://localhost:8080/inventories";

export default class App extends Component {
  state = {
    inventory: [],
    warehouse: [],
  };
  componentDidMount() {
    this.displayWarehouseList();
    this.displayInventoryList();
  }
  displayWarehouseList = () => {
    return axios.get(warehouseApi).then((response) => {
      console.log(response.data);
      this.setState({
        warehouse: response.data,
      });
    });
  };
  displayInventoryList = () => {
    return axios.get(inventoryApi).then((response) => {
      console.log(response.data);
      this.setState({
        inventory: response.data,
      });
    });
  };

  render() {
    return (
      <div className="instock">
        <Switch>
          <Route
            path="/warehouse"
            exact
            render={() => <Warehouse warehouses={this.state.warehouse} />}
          />
          <Route path="/warehouse/add" exact render={() => <AddWarehouse />} />
          <Route
            path="/warehouse/:warehouseId/edit"
            exact
            render={(props) => (
              <EditWarehouse warehouses={this.state.warehouse} {...props} />
            )}
          />
          <Route
            path="/warehouse/:warehouseId"
            exact
            render={(props) => (
              <>
                <WarehouseDetails
                  warehouseItems={this.state.inventory}
                  warehouseInfo={this.state.warehouse}
                  {...props}
                />
              </>
            )}
          />
          <Route
            path="/Inventories"
            exact
            render={() => <Inventory inventories={this.state.inventory} />}
          ></Route>
          <Route
            path="/warehouse"
            render={() => <Warehouse warehouses={this.state.warehouse} />}
          />
          <Route
            path="/inventoryDetails/:warehouseId/:inventoryId"
            exact
            render={(props) => (
              <>
                <InventoryDetails items={this.state.inventory} {...props} />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}
