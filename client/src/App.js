import React, { Component } from 'react';
import Warehouse from './components/Warehouse';
import Inventory from './components/Inventory';

class App extends Component {
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
