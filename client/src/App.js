import React, { Component } from 'react';
import Warehouse from './components/WHInventoryList/WHIventoryListContainer';
import Inventory from './components/Inventory';
import { API_Key } from './';
import './Sass/Apps.css';

class App extends Component {
  state = {
    inventoryArr: [],
    activeInventoryObj: {},
  };

  componentDidMount() {
    this.getactiveInventoryObj('');
    this.getInventoryArrData();
  }

  componentDidUpdate(_prevProps, prevState) {
    const { params } = this.props.match;
    if (
      params.id !== undefined &&
      prevState.activeInventoryObj.id !== params.id
    ) {
      this.getactiveInventoryObj(params.id);
    }
  }

  componentWillUnmount() {
    console.log('Component did unmount');
  }

  render() {
    return (
      <div className='App'>
        <Warehouse />
        <Inventory />
      </div>
    );
  }
}

export default App;
