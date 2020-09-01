import React, { Component } from "react";
import InventoryHeader from "./InventoryHeader";
import InventoryTableColumns from "./InventoryTableColumns";
import InventoryItem from "./InventoryItem";
import axios from "axios";

export default class Inventory extends Component {
  state = {
    searchValue: "",
    inventories: [],
    sort: {
      item: true,
      category: true,
      status: true,
      qty: true,
      warehouse: true,
    },
  };

  searchChange = (event) => {
    this.setState({ searchValue: event.target.value });

    if (event.target.value !== "") {
      this.inventorySearch(event.target.value);
    } else {
      this.setState({ inventories: this.props.inventories });
    }
  };

  sort = (asc, property, sortConditions) => {
    const inventoryApi = `http://localhost:8080/inventories/sort/${property}`;
    axios.get(inventoryApi).then((response) => {
      let sortArr = response.data;
      if (!asc) {
        sortArr = sortArr.reverse();
      }
      this.setState({ inventories: sortArr, sort: sortConditions });
    });
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
      return null;
    });
    this.setState({
      inventories: filterList,
    });
  };

  render() {
    let list = [];
    if (this.state.searchValue === "" && this.state.inventories.length === 0) {
      list = this.props.inventories;
    } else {
      list = this.state.inventories;
    }

    return (
      <div className="inventory__list">
        <div className="inventory__list--container">
          <InventoryHeader
            searchValue={this.state.searchValue}
            searchChange={this.searchChange}
            {...this.props}
          />
          <InventoryTableColumns
            sortItem={this.state.sort.item}
            sortCategory={this.state.sort.category}
            sortStatus={this.state.sort.status}
            sortQty={this.state.sort.qty}
            sortWarehouse={this.state.sort.warehouse}
            sort={this.sort}
          />
          <InventoryItem inventories={list} action={this.props.action} />
        </div>
        <p className="warehouse-detail__copyright">
          &#169; InStock Inc. All Rights Reserved
        </p>
      </div>
    );
  }
}
