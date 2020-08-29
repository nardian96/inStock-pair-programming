import React from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/Icons/edit-24px-white.svg";
import { Link } from "react-router-dom";

function InventoryHeader(props) {
  return (
    <div className="inventory-header">
      <div className="inventory-header__header-left">
        <h1 className="inventory-header__inventory-name">
          <Link to={`/warehouse/${props.inventoryName.warehouseID}`}>
            <img
              src={backArrow}
              className="inventory-header__backArrow"
              alt="back arrow"
            />
          </Link>
          {props.inventoryName.itemName}
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

export default InventoryHeader;
