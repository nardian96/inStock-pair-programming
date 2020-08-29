import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Warehouse from './components/WarehouseList/Warehouse'
import AddWarehouse from './components/WarehouseList/AddEditWarehouse/AddWarehouse'
import axios from 'axios'
import './Sass/App.css'
import WarehouseDetails from "./components/warehouseDetail/"
import Inventory from "./components/Inventory";
// import WarehouseInfo from "./components/WarehouseInfo/";

  
const warehouseApi = "http://localhost:8080/warehouse";
const inventoryApi = "http://localhost:8080/inventory";


export default class App extends Component {
    
    state = {
        inventory: [],
        warehouse: []
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
          console.log(response.data);
          this.setState({
            inventory: response.data,
            });
        });
    };

    componentDidMount() {
        this.displayWarehouseList();
        this.displayInventoryList();
    };

    render() {

        return (
            <div className="instock">
                <Switch>
                    <Route
                        path="/warehouse" exact
                        render={() => (
                            <Warehouse warehouses={this.state.warehouse}/>
                        )}/>
                    <Route
                        path="/warehouse/add"
                        render={() => (
                            <AddWarehouse/>
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
                        path="/Inventory"
                        render={() => <Inventory inventories={this.state.inventory} />}
                    />
                </Switch>
            </div>
        );
    }    
}

