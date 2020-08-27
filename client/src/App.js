import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Warehouse from "./components/WarehouseList/Warehouse";
import InventoryList from "./components/InventoryList";
import axios from "axios";
import "./Sass/App.css";
import WarehouseDetails from "./components/WarehouseDetail";
import WarehouseInfo from "./components/WarehouseInfo";

const warehouseApi = "http://localhost:8080/warehouse";
const inventoryURL = `http://localhost:8080/inventories`;

class App extends Component {
  state = {
    inventory: [],
    products: [],
    warehouse: [],
  };

  displayWarehouseList = () => {
    return axios.get(warehouseApi).then((response) => {
      console.log("Hello");
      this.setState({
        warehouse: response.data,
      });
    });
  };

  getInventoryObj() {
    axios.get(inventoryURL).then((response) => {
      console.log(response);
      this.setState({ inventory: response.data });
    });
  }

  componentDidMount() {
    this.displayWarehouseList();
    this.getInventoryObj();
  }

  componentDidUpdate(_prevProps, prevState) {
    const { params } = this.props.match;
    if (params.id !== undefined && prevState.inventoryObj.id !== params.id) {
      this.getactiveInventoryObj(params.id);
    }
  }

  componentWillUnmount() {
    console.log("Component did unmount");
  }

  render() {
    return (
      <div className="App">
        <InventoryList InventoryList={this.state.inventoryObj} />
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    inventory: [],
    products: [],
    warehouse: [],
  };

  componentDidMount() {}

  render() {
    const { warehouse } = this.state;
    return (
      <div className="instock">
        <InventoryList InventoryList={this.state.inventory} />
        <Switch>
          <Route
            path="/warehouse"
            render={() => <Warehouse warehouses={warehouse} />}
          />
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

export default App;
