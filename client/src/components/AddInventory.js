import React, { Component } from "react";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";
import rightIcon from "../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";
import backIcon from "../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

class AddInventory extends Component {
  state = { status: "In stock" };

  statusChange = (event) => {
    this.setState({ status: event.target.value });
  };

  render() {
    // Dynamically generate quantity components
    let quantityElement;
    if (this.state.status === "In stock") {
      quantityElement = (
        <>
          <div className="add-inventory__form--label">Quantity</div>
          <input
            className="add-inventory__form--input"
            type="text"
            name="quantity"
            defaultValue="0"
            form="addInventoryForm"
          ></input>
        </>
      );
    } else {
      quantityElement = <></>;
    }

    return (
      <div className="add-inventory">
        <div className="add-inventory-header">
          <img
            className="add-inventory-header--back"
            src={backIcon}
            alt="back"
          />
          <h1 className="add-inventory-header__h1">Add New Inventory Item</h1>
        </div>
        <hr className="add-inventory--break" />

        <h2 className="add-inventory__h2">Item Details</h2>
        <form
          className="add-inventory__form"
          id="addInventoryForm"
          onSubmit={this.props.addInventory}
        >
          <div className="add-inventory__form--label">Item Name</div>
          <input
            className="add-inventory__form--input"
            type="text"
            name="itemName"
            placeholder="Item Name"
          ></input>

          <div className="add-inventory__form--label">Description</div>
          <textarea
            className="add-inventory__form--text"
            type="text"
            name="description"
            placeholder="Please enter a brief item description..."
          ></textarea>

          <div className="add-inventory__form--label">Category</div>
          <select
            className="add-inventory__form--input"
            name="category"
            placeholder="Please select"
          >
            <option>Please Select</option>
            <option value="Electronics">Electronics</option>
            <option value="Gear">Gear</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
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
            value="In stock"
            id="in-stock"
            onChange={this.statusChange}
            defaultChecked
          ></input>
          <label htmlFor="in-stock">In stock</label>
          <input
            form="addInventoryForm"
            type="radio"
            name="status"
            value="Out of stock"
            onChange={this.statusChange}
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
                <option key={index} value={`${warehouse.id},${warehouse.name}`}>
                  {warehouse.name}
                </option>
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
            + Add Item
          </button>
        </div>
      </div>
    );
  }
}

export default AddInventory;
