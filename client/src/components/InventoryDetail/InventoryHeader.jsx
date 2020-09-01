import React, { Component } from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/Icons/edit-24px-white.svg";
import { Link } from "react-router-dom";

export default class InventoryHeader extends Component {
  render() {
    console.log("detal", this.props.history);
    console.log(`/Inventories/${this.props.inventoryName.id}/edit`);
    const id = this.props.inventoryName.warehouseID;
    if (!id) {
      return <p>loading</p>;
    }
    // let location;
    // if (this.props.match.params.location === "1") {
    //   location = `/warehouse/${this.props.inventoryName.warehouseID}`;
    // } else {
    //   location = "/Inventories";
    // }
    return (
      <div className="inventory-header">
        <div className="inventory-header__header-left">
          <h1 className="inventory-header__inventory-name">
            <img
              src={backArrow}
              className="inventory-header__backArrow"
              alt="back arrow"
              onClick={this.props.history.goBack}
            />
            {this.props.inventoryName.itemName}
          </h1>
        </div>
        <div className="inventory-header__header-right">
          <Link
            className="inventory-header__edit-button"
            to={() => `/Inventories/${this.props.inventoryName.id}/edit`}
          >
            <img
              src={editIconWhite}
              alt="edit icon"
              className="inventory-header__edit-icon"
            />
            <span>Edit</span>
          </Link>
        </div>
      </div>
    );
  }
}
