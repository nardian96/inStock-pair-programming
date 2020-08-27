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
        return(axios.get(warehouseApi)
        .then((response) => {
            console.log('Hello')
            this.setState({
                warehouse: response.data
            })
        })
    )}

    componentDidMount() {
        this.displayWarehouseList()
    }


    render() {
        const { warehouse } = this.state
        
        return (
        <div className="instock">
            <Switch>
                <Route
                    path="/warehouse"
                    render={() => (
                        <Warehouse warehouses={warehouse}/>
                    )}
                />
                {/* <Route
                    path="/warehouse/:id"
                    render={() => (
                    <WarehouseDetails
                        warehouseItems={this.state.inventory}
                        WarehouseInfo={this.state.warehouse}
                    />
                    )}
                /> */}
            </Switch>
          </div>
        );
    }
}

export default App
