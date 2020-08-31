import React, { Component } from "react";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";
import rightIcon from "../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalWindow from "./ModalWindow.jsx";

const inventoryApi = "http://localhost:8080/inventories";

export default class Inventory extends Component {
  state = { searchValue: "", inventories: [] };

  componentDidMount() {
    this.displayInventoryList();
  }

  displayInventoryList = () => {
    return axios.get(inventoryApi).then((response) => {
      console.log(response.data);
      this.setState({
        inventories: response.data,
      });
    });
  };

  searchChange = (event) => {
    this.setState({ searchValue: event.target.value });
    if (event.target.value !== "") {
      this.inventorySearch(event.target.value);
    } else {
      this.displayInventoryList();
    }
  };

  inventorySearch = (text) => {
    let reg = new RegExp(`^${text}.*`, "i");
    let filterList = [];
    this.state.inventories.map((inv) => {
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
    this.setState({
      inventories: filterList,
    });
  };

  render() {
    return (
      <div className="inventory">
        <div className="page-header">
          <h1 className="page-header__h1">Inventory</h1>
          <input
            className="page-header-search"
            type="text"
            placeholder="Search"
            value={this.state.searchValue}
            onChange={this.searchChange}
          />
          <button
            className="page-header-link"
            onClick={() => this.props.history.push("/Inventories/add")}
          >
            + Add New Item
          </button>
        </div>
        <hr className="inventory--break" />
        <div className="table">
          <div className="table__header">
            <span className="table__header--container">
              <span className="table__header-text">INVENTORY ITEM</span>
              <img className="table__header-img" src={sortIcon} alt="sort" />
            </span>

            <span className="table__header--container">
              <span className="table__header-text">CATEGORY</span>
              <img className="table__header-img" src={sortIcon} alt="sort" />
            </span>

            <span className="table__header--container">
              <span className="table__header-text">STATUS</span>
              <img className="table__header-img" src={sortIcon} alt="sort" />
            </span>

            <span className="table__header--container">
              <span className="table__header-text">QTY</span>
              <img className="table__header-img" src={sortIcon} alt="sort" />
            </span>

            <span className="table__header--container">
              <span className="table__header-text">WAREHOUSE</span>
              <img className="table__header-img" src={sortIcon} alt="sort" />
            </span>

            <span className="table__header--container">
              <span className="table__header-text">ACTIONS</span>
              <img className="table__header-img" src={sortIcon} alt="sort" />
            </span>
          </div>
          {this.state.inventories.map((inventory, index) => {
            let status = inventory.status.toUpperCase();
            let statusClass = "";
            const info = {
              name: inventory.itemName,
              item: "inventory",
              action: this.props.action,
              id: inventory.id,
            };

            if (status === "IN STOCK") {
              statusClass = "status-in";
            } else {
              statusClass = "status-out";
            }

            return (
              <React.Fragment key={index}>
                <div className="table__item">
                  <div className="table__item__container">
                    <div className="table__item-label">INVENTORY ITEM</div>
                    <Link
                      className="table__item-link"
                      to={`/inventoryDetails/${inventory.warehouseId}/${inventory.id}`}
                    >
                      <span className="table__item-text">
                        {inventory.itemName}
                      </span>
                      <img
                        className="table__item-right"
                        src={rightIcon}
                        alt="right icon"
                      />
                    </Link>
                  </div>

                  <div className="table__item__container">
                    <div className="table__item-label">STATUS</div>
                    <span className={`table__item-text status ${statusClass}`}>
                      {status}
                    </span>
                  </div>

                  <div className="table__item__container">
                    <div className="table__item-label">CATEGORY</div>
                    <span className="table__item-text">
                      {inventory.category}
                    </span>
                  </div>

                  <div className="table__item__container">
                    <div className="table__item-label">QTY</div>
                    <span className="table__item-text">
                      {inventory.quantity}
                    </span>
                  </div>

                  <div className="table__item__container">
                    <div className="table__item-label">WAREHOUSE</div>
                    <span className="table__item-text">
                      {inventory.warehouseName}
                    </span>
                  </div>

                  <div className="table__item__icons">
                    <ModalWindow info={info}></ModalWindow>
                    <Link
                      className="table__item__icons--link"
                      to={`/Inventories/${inventory.id}/edit`}
                    >
                      <img
                        className="table__item__icons--edit"
                        src={editIcon}
                        alt="edit"
                      />
                    </Link>
                  </div>
                </div>
                <hr className="inventory--break" />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}
