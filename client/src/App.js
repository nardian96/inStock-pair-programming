import React, { Component } from 'react'
import Warehouse from './components/WarehouseList/Warehouse'
import Axios from 'axios'
import './Sass/App.css'

const warehouseApi = 'http://localhost:8080/warehouse';


class App extends Component {
    
    state = {
        warehouseList: []
    }

    displayWarehouseList = () => {
        return(Axios.get(warehouseApi)
        .then((response) => {
            console.log('Hello')
            this.setState({
                warehouseList: response.data
            })
        })
    )}

    componentDidMount() {
        this.displayWarehouseList()
    }

    
    render() {

        const { warehouseList } = this.state
        return (
            <Warehouse warehouses={warehouseList}/>
        )
    }
}

export default App
