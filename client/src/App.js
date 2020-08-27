import React, { Component } from 'react';
import axios from 'axios';
import InventoryList from './components/InventoryList';
import './Sass/Apps.css';

const axiosURL = `http://localhost:5000/inventories`;

class App extends Component {
  state = {
    inventoryArr: [],
    inventoryObj: {},
  };

  getInventoryObj() {
    axios.get(axiosURL).then((response) => {
      console.log(response);
      this.setState({ inventoryObj: response.data });
    });
  }

  componentDidMount() {
    this.getInventoryObj();
  }

  componentDidUpdate(_prevProps, prevState) {
    const { params } = this.props.match;
    if (params.id !== undefined && prevState.inventoryObj.id !== params.id) {
      this.getactiveInventoryObj(params.id);
    }
  }

  componentWillUnmount() {
    console.log('Component did unmount');
  }

  render() {
    return (
      <div className='App'>
        <InventoryList InventoryList={this.state.inventoryObj} />
      </div>
    );
  }
}

export default App;
