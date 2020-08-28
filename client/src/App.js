import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Warehouse from './components/WarehouseList/Warehouse'
import axios from 'axios'
import './Sass/App.css'
import WarehouseDetails from "./components/warehouseDetail/";
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
            render={() => (
            <Warehouse warehouses={this.state.warehouse}/>
          )}/>
          <Route
            path="/warehouse/:warehouseId"
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
            render={() => <Inventory inventories={this.state.inventory} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

