import React, { Component } from "react";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";
import rightIcon from "../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import backIcon from "../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";

class AddInventory extends Component {
  state = {
    status: "In Stock",
    pathAdd: this.props.match.path.split("/")[2] === "add",
    currInventory: {},
  };

  componentDidMount() {
    if (!this.state.pathAdd) {
      this.getInventoryById(this.props.match.params.inventoryId);
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    const { params } = this.props.match;
    if (
      params.inventoryId !== undefined &&
      prevState.currInventory.id !== params.inventoryId &&
      !this.state.pathAdd
    ) {
      this.getInventoryById(params.inventoryId);
    }
  }

  statusChange = (event) => {
    this.setState({ status: event.target.value });
  };

  getInventoryById = (id) => {
    if (this.props.inventories.length !== 0) {
      let inventory = this.props.inventories.filter(
        (inventory) => inventory.id === id
      )[0];
      this.setState({ currInventory: inventory, status: inventory.status });
    }
  };

  render() {
    // Dynamically generate quantity components
    //console.log("logging", this.props.inventories);
    let quantityElement;
    if (this.state.status === "In Stock") {
      quantityElement = (
        <>
          <div className="add-inventory__form--label">Quantity</div>
          <input
            className="add-inventory__form--input"
            type="text"
            name="quantity"
            defaultValue={
              this.state.pathAdd ? "" : this.state.currInventory.quantity
            }
            form="addInventoryForm"
          ></input>
        </>
      );
    } else {
      quantityElement = <></>;
    }
    let category = "";
    let warehouseName = "";
    if (!this.state.pathAdd) {
      category = this.state.currInventory.category;
      warehouseName = this.state.currInventory.warehouseName;
    }
    return (
      <div className="add-inventory">
        <div className="add-inventory-header">
          <img
            className="add-inventory-header--back"
            src={backIcon}
            alt="back"
          />
          <h1 className="add-inventory-header__h1">
            {this.state.pathAdd ? "Add New" : "Edit"} Inventory Item
          </h1>
        </div>
        <hr className="add-inventory--break" />

        <h2 className="add-inventory__h2">Item Details</h2>
        <form
          className="add-inventory__form"
          id="addInventoryForm"
          onSubmit={
            this.state.pathAdd
              ? this.props.addInventory
              : this.props.updateInventory
          }
        >
          <div className="add-inventory__form--label">Item Name</div>
          <input
            className="add-inventory__form--input"
            type="text"
            name="itemName"
            defaultValue={
              this.state.pathAdd ? "" : this.state.currInventory.itemName
            }
            placeholder="Item Name"
          ></input>

          <div className="add-inventory__form--label">Description</div>
          <textarea
            className="add-inventory__form--text"
            type="text"
            name="description"
            defaultValue={
              this.state.pathAdd ? "" : this.state.currInventory.description
            }
            placeholder="Please enter a brief item description..."
          ></textarea>

          <div className="add-inventory__form--label">Category</div>
          <select className="add-inventory__form--input" name="category">
            <option value="" label="Please Select"></option>
            <option
              value="Electronics"
              label="Electronics"
              selected={category === "Electronics"}
            ></option>
            <option
              value="Gear"
              label="Gear"
              selected={category === "Gear"}
            ></option>
            <option
              value="Apparel"
              label="Apparel"
              selected={category === "Apparel"}
            ></option>
            <option
              value="Accessories"
              label="Accessories"
              selected={category === "Accessories"}
            ></option>
            <option
              value="Health"
              label="Health"
              selected={category === "Heath"}
            ></option>
          </select>
        </form>

        <hr className="add-inventory--break" />
        <h2 className="add-inventory__h2">Item Availability</h2>

        <div className="add-inventory__form">
          <div className="add-inventory__form--label">Status</div>
          <input
            form="addInventoryForm"
            type="radio"
            name="status"
            value="In Stock"
            id="in-stock"
            onChange={this.statusChange}
            defaultChecked
            checked={this.state.status === "In Stock"}
          ></input>
          <label htmlFor="in-stock">In stock</label>
          <input
            form="addInventoryForm"
            type="radio"
            name="status"
            value="Out of Stock"
            onChange={this.statusChange}
            checked={this.state.status === "Out of Stock"}
            id="out-stock"
          ></input>
          <label htmlFor="out-stock">Out of stock</label>

          {quantityElement}

          <div className="add-inventory__form--label">Warehouse</div>
          <select
            className="add-inventory__form--input"
            name="warehouse"
            placeholder="Please select"
            form="addInventoryForm"
          >
            <option>Please Select</option>
            {this.props.warehouses.map((warehouse, index) => {
              return (
                <option
                  key={index}
                  value={`${warehouse.id},${warehouse.name}`}
                  label={warehouse.name}
                  selected={warehouseName === warehouse.name}
                ></option>
              );
            })}
          </select>
        </div>

        <div className="add-inventory__controller">
          <div className="add-inventory__controller-cancel">Cancel</div>
          <button
            className="add-inventory__controller-button"
            type="submit"
            form="addInventoryForm"
          >
            {this.state.pathAdd ? "+ Add Item" : "Save"}
          </button>
        </div>
      </div>
    );
  }
}

export default AddInventory;
