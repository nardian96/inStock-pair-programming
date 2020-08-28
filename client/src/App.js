import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Warehouse from "./components/WarehouseList/Warehouse";
import axios from "axios";
import "./Sass/App.css";
import WarehouseDetails from "./components/warehouseDetail/";

const warehouseApi = "http://localhost:8080/warehouse";
const inventoryApi = "http://localhost:8080/inventory";

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
      this.setState({
        inventory: response.data,
      });
    });
  };

  render() {
    if (!this.props.match) {
      return <p>loading</p>;
    } else if (this.props.match.path === "/warehouse") {
      console.log(this.props.match);
      const warehouseId = "2922c286-16cd-4d43-ab98-c79f698aeab0";
      // const warehouseId = this.props.match.params.id;
      console.log(this.props.match.id);
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
  }
}
