import React, { Component } from "react";
import sortIcon from "../../assets/Icons/sort-24px.svg";

export default function InventoryTableColumns() {
  return (
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
  );
}
