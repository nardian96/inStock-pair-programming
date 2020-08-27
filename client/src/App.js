import React, { Component } from 'react';
import axios from 'axios';
import InventoryList from './components/InventoryList';
import './Sass/Apps.css';

const axiosURL = 'http://localhost:5000/inventories';

class App extends Component {
  state = {
    inventoryArr: [],
    activeInventoryObj: {},
  };

  getactiveInventoryObj() {
    axios.get(`axiosURL`).then((response) => {
      console.log(response);
      this.setState({ activeInventoryObj: response.data });
    });
  }

  componentDidMount() {
    this.getactiveInventoryObj();
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
        <InventoryList InventoryList={this.state.activeInventoryObj} />
      </div>
    );
  }
}

export default App;
