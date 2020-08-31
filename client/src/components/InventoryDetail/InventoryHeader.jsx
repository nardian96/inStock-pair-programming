import React, { Component } from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/Icons/edit-24px-white.svg";
import { Link } from "react-router-dom";

export default class InventoryHeader extends Component {
  render() {
    console.log(this.props);
    const id = this.props.inventoryName.warehouseID;
    if (!id) {
      return <p>loading</p>;
    }
    let location;
    if (this.props.match.params.location === "1") {
      location = `/warehouse/${this.props.inventoryName.warehouseID}`;
    } else {
      location = "/Inventories";
    }
    return (
      <div className="inventory-header">
        <div className="inventory-header__header-left">
          <h1 className="inventory-header__inventory-name">
            <Link to={location}>
              <img
                src={backArrow}
                className="inventory-header__backArrow"
                alt="back arrow"
                // onClick={navigation.goBack()}
              />
            </Link>
            {this.props.inventoryName.itemName}
          </h1>
        </div>
        <div className="inventory-header__header-right">
          <button className="inventory-header__edit-button">
            <img
              src={editIconWhite}
              alt="edit icon"
              className="inventory-header__edit-icon"
            />
            <span>Edit</span>
          </button>
        </div>
      </div>
    );
  }
}
