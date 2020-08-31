import React, { Component } from "react";
import sortIcon from "../../assets/Icons/sort-24px.svg";

export default function InventoryTableColumns() {
  return (
    <div className="inventory-table__label">
      <div className="inventory-table__label-item">
        <h4>
          INVENTORY ITEM <img src={sortIcon} />
        </h4>
      </div>
      <div className="inventory-table__label-category">
        <h4>
          CATEGORY <img src={sortIcon} />
        </h4>
      </div>
      <div className="inventory-table__label-status">
        <h4>
          STATUS <img src={sortIcon} />
        </h4>
      </div>
      <div className="inventory-table__label-qty">
        <h4>
          QTY <img src={sortIcon} />
        </h4>
      </div>
      <div className="inventory-table__label-warehouse">
        <h4>
          WAREHOUSE <img src={sortIcon} />
        </h4>
      </div>
      <div className="inventory-table__label-actions">
        <h4>ACTIONS</h4>
      </div>
    </div>
  );
}
