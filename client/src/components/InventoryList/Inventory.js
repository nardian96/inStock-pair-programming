import React, { Component } from "react";
import InventoryHeader from "./InventoryHeader";
import InventoryTableColumns from "./InventoryTableColumns";
import InventoryItem from "./InventoryItem";

export default class Inventory extends Component {
  state = { searchValue: "", inventories: [] };

  searchChange = (event) => {
    this.setState({ searchValue: event.target.value });

    if (event.target.value !== "") {
      this.inventorySearch(event.target.value);
    } else {
      this.setState({ inventories: this.props.inventories });
    }
  };

  inventorySearch = (text) => {
    let reg = new RegExp(`^${text}.*`, "i");
    let filterList = [];
    this.props.inventories.map((inv) => {
      if (reg.test(inv.itemName)) {
        filterList.push(inv);
      } else if (reg.test(inv.category)) {
        filterList.push(inv);
      } else if (reg.test(inv.status)) {
        filterList.push(inv);
      } else if (reg.test(inv.quantity)) {
        filterList.push(inv);
      } else if (reg.test(inv.warehouseName)) {
        filterList.push(inv);
      }
    });
    console.log(reg, filterList);
    this.setState({
      inventories: filterList,
    });
  };

  render() {
    return (
      <div className="inventory">
        <InventoryHeader
          searchValue={this.state.searchValue}
          searchChange={this.searchChange}
          {...this.props}
        />
        <hr className="inventory--break" />
        <div className="table">
          <InventoryTableColumns />
          <InventoryItem
            inventories={
              this.state.inventories.length === 0
                ? this.props.inventories
                : this.state.inventories
            }
          />
        </div>
      </div>
    );
  }
}
