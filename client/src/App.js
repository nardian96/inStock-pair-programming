import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Warehouse from './components/WarehouseList/Warehouse'
import axios from 'axios'
import './Sass/App.css'
// import WarehouseDetails from "./components/WarehouseDetail";
// import WarehouseInfo from "./components/WarehouseInfo";

  
const warehouseApi = 'http://localhost:8080/warehouse';


class App extends Component {
    
    state = {
        inventory: [],
        products: [],
        warehouse: []
    }

    displayWarehouseList = () => {
        return axios.get(warehouseApi).then((response) => {
        this.setState({
            warehouse: response.data,
        });
        });
    };

    componentDidMount() {
        this.displayWarehouseList();
    }
    }

    render() {
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
    }

    return (
        <div className="instock">
            <Switch>
                <Route
                    path="/warehouse"
                    render={() => (
                        <Warehouse warehouses={warehouse}/>
                    )}/>
            </Switch>
        </div>
    );
}

export default App

 
