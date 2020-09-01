import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header, { HeaderInventory } from "./components/Header";
import Warehouse from "./components/WarehouseList/Warehouse";
import AddWarehouse from "./components/AddEditWarehouse/AddWarehouse";
import EditWarehouse from "./components/AddEditWarehouse/EditWarehouse";
import axios from "axios";
import "./Sass/App.css";
import WarehouseDetails from "./components/warehouseDetail/";
import InventoryDetails from "./components/InventoryDetail/";
import Inventory from "./components/InventoryList/Inventory";
import AddInventory from "./components/AddInventory";

const warehouseApi = "http://localhost:8080/warehouse";
const inventoryApi = "http://localhost:8080/inventories";

export default class App extends Component {
  state = {
    inventory: [],
    warehouse: [],
  };

  deleteWarehouse = (id) => {
    axios
      .delete(`${warehouseApi}/${id}`)
      .then((response) => {
        this.displayWarehouseList();
      })
      .then((response) => {
        this.deleteAllWarehouseInventory(id);
      });
  };
  deleteAllWarehouseInventory = (id) => {
    axios.delete(`${inventoryApi}/warehouse/${id}`).then((response) => {
      this.displayInventoryList();
    });
  };
  deleteInventory = (id) => {
    axios.delete(`${inventoryApi}/${id}`).then((response) => {
      this.displayInventoryList();
    });
  };

  componentDidMount() {
    this.displayWarehouseList();
    this.displayInventoryList();
  }

  displayWarehouseList = () => {
    return axios.get(warehouseApi).then((response) => {
      this.setState({
        warehouse: response.data,
      });
    });
  };

  displayInventoryList = () => {
    return axios.get(inventoryApi).then((response) => {
      this.setState({
        inventory: response.data,
      });
    });
  };

  postInventory = (event) => {
    event.preventDefault();
    let newItem = {};
    newItem.itemName = event.target.itemName.value;
    newItem.description = event.target.description.value;
    newItem.category = event.target.category.value;

    newItem.status = event.target.status.value;
    if (newItem.status === "In Stock") {
      newItem.quantity = parseInt(event.target.quantity.value);
    } else {
      newItem.quantity = 0;
    }
    if (newItem.quantity === 0) {
      newItem.status = "Out of Stock";
    }
    let warehouse = event.target.warehouse.value;
    newItem.warehouseId = warehouse.split(",")[0];
    newItem.warehouseName = warehouse.split(",").splice(1).join(",");
    // Don't post if fields are empty
    if (newItem.itemName === "") {
      newItem.itemName = undefined;
    }
    if (newItem.description === "") {
      newItem.description = undefined;
    }
    if (newItem.category === "") {
      newItem.category = undefined;
    }
    if (isNaN(newItem.quantity)) {
      newItem.quantity = undefined;
    }
    if (newItem.warehouseName === "") {
      newItem.warehouseName = undefined;
    }
    axios.post(inventoryApi, newItem).then(() => {
      this.displayInventoryList();
      this.props.history.push("/Inventories");
    });
  };

  updateInventory = (event) => {
    event.preventDefault();
    let inventory = {};
    inventory.itemName = event.target.itemName.value;
    inventory.description = event.target.description.value;
    inventory.category = event.target.category.value;

    inventory.status = event.target.status.value;
    if (inventory.status === "In Stock") {
      inventory.quantity = parseInt(event.target.quantity.value);
    } else {
      inventory.quantity = 0;
    }
    if (inventory.quantity === 0) {
      inventory.status = "Out of Stock";
    }
    let warehouse = event.target.warehouse.value;
    inventory.warehouseId = warehouse.split(",")[0];
    inventory.warehouseName = warehouse.split(",").splice(1).join(",");
    // Don't post if fields are empty
    if (inventory.itemName === "") {
      inventory.itemName = undefined;
    }
    if (inventory.description === "") {
      inventory.description = undefined;
    }
    if (inventory.category === "") {
      inventory.category = undefined;
    }
    if (isNaN(inventory.quantity)) {
      inventory.quantity = undefined;
    }
    if (inventory.warehouseName === "") {
      inventory.warehouseName = undefined;
    }
    let url =
      "http://localhost:8080/inventories/" +
      this.props.match.params.inventoryId;
    axios.put(url, inventory).then(() => {
      this.displayInventoryList();
      this.props.history.push("/Inventories");
    });
  };

  render() {
    return (
      <div className="instock">
        <Switch>
          <Route
            path="/warehouse"
            exact
            render={() => (
              <>
                <Header />
                <Warehouse
                  warehouses={this.state.warehouse}
                  action={this.deleteWarehouse}
                />
              </>
            )}
          />
          <Route
            path="/warehouse/add"
            exact
            render={() => (
              <>
                <Header />
                <AddWarehouse
                  warehouses={this.state.warehouse}
                  action={this.displayWarehouseList}
                />
              </>
            )}
          />
          <Route
            path="/warehouse/:warehouseId/edit"
            exact
            render={(props) => (
              <>
                <Header />
                <EditWarehouse
                  warehouses={this.state.warehouse}
                  action={this.displayWarehouseList}
                  {...props}
                />
              </>
            )}
          />
          <Route
            path="/warehouse/:warehouseId"
            exact
            render={(props) => (
              <>
                <Header />
                <WarehouseDetails
                  warehouseItems={this.state.inventory}
                  warehouseInfo={this.state.warehouse}
                  action={this.deleteInventory}
                  {...props}
                />
              </>
            )}
          />
          <Route
            path="/inventoryDetails/:warehouseId/:inventoryId/:location"
            exact
            render={(props) => (
              <>
                <HeaderInventory />
                <InventoryDetails
                  items={this.state.inventory}
                  action={this.deleteInventory}
                  {...props}
                />
              </>
            )}
          />

          <Route
            path="/inventories"
            exact
            render={(props) => (
              <>
                <HeaderInventory />
                <Inventory
                  inventories={this.state.inventory}
                  action={this.deleteInventory}
                  {...props}
                />
              </>
            )}
          ></Route>

          <Route
            path="/inventories/add"
            exact
            render={(props) => (
              <>
                <HeaderInventory />
                <AddInventory
                  inventories={this.state.inventory}
                  warehouses={this.state.warehouse}
                  addInventory={this.postInventory}
                  {...props}
                />
              </>
            )}
          />

          <Route
            path="/inventories/:inventoryId/edit"
            exact
            render={(props) => (
              <>
                <HeaderInventory />
                <AddInventory
                  inventories={this.state.inventory}
                  warehouses={this.state.warehouse}
                  updateInventory={this.updateInventory}
                  {...props}
                />
              </>
            )}
          />
        </Switch>
      </div>
    );
  }
}
