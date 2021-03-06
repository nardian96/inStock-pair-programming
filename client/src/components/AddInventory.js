import React, { Component } from "react";
import backIcon from "../assets/Icons/arrow_back-24px.svg";
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
    let url =
      "http://localhost:8080/inventories/" +
      this.props.match.params.inventoryId;
    if (this.props.inventories.length !== 0) {
      axios.get(url).then((response) => {
        this.setState({
          currInventory: response.data,
          status: response.data.status,
        });
      });
    }
  };

  render() {
    // Dynamically generate quantity components
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
    const editClass = this.state.pathAdd
      ? "add-inventory__controller-button"
      : "add-inventory__controller-edit";

    return (
      <div className="add-inventory">
        <div className="add-inventory-header">
          <button
            className="add-inventory-header--button"
            onClick={this.props.history.goBack}
          >
            <img
              className="add-inventory-header--back"
              src={backIcon}
              alt="back"
            />
          </button>
          <h1 className="add-inventory-header__h1">
            {this.state.pathAdd ? "Add New" : "Edit"} Inventory Item
          </h1>
        </div>

        <div className="add-inventory--container">
          <form
            className="add-inventory__form form-border"
            id="addInventoryForm"
            onSubmit={
              this.state.pathAdd
                ? this.props.addInventory
                : this.props.updateInventory
            }
          >
            <h2 className="add-inventory__h2">Item Details</h2>
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

          <div className="add-inventory__form">
            <h2 className="add-inventory__h2">Item Availability</h2>
            <div className="add-inventory__form--label">Status</div>
            <div className="add-inventory__form-radio">
              <div className="add-inventory__form-radio-container">
                <input
                  form="addInventoryForm"
                  type="radio"
                  name="status"
                  value="In Stock"
                  id="in-stock"
                  onChange={this.statusChange}
                  checked={this.state.status === "In Stock"}
                ></input>
                <label className="radio-label" htmlFor="in-stock">
                  In stock
                </label>
              </div>
              <div className="add-inventory__form-radio-container">
                <input
                  form="addInventoryForm"
                  type="radio"
                  name="status"
                  value="Out of Stock"
                  onChange={this.statusChange}
                  checked={this.state.status === "Out of Stock"}
                  id="out-stock"
                ></input>
                <label className="radio-label" htmlFor="out-stock">
                  Out of stock
                </label>
              </div>
            </div>

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
        </div>

        <div className="add-inventory__controller">
          <button
            className="add-inventory__controller-cancel"
            onClick={this.props.history.goBack}
          >
            Cancel
          </button>

          <button
            // className={"add-inventory__controller-button "}
            className={editClass}
            type="submit"
            form="addInventoryForm"
          >
            {this.state.pathAdd ? "+ Add Item" : "Save"}
          </button>
        </div>
        <p className="warehouse-detail__copyright">
          &#169; InStock Inc. All Rights Reserved
        </p>
      </div>
    );
  }
}

export default AddInventory;
