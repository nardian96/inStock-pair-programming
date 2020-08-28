import React from "react";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";
import rightIcon from "../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../assets/Icons/sort-24px.svg";

export default function Inventory(props) {
  return (
    <div className="inventory">
      <div className="page-header">
        <h1>Inventory</h1>
        <input
          className="page-header-search"
          type="text"
          placeholder="Search"
        />
        <button className="page-header-button"> + Add New Item</button>
      </div>
      <hr />
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
        {props.inventories.map((inventory, index) => {
          return (
            <React.Fragment key={index}>
              <div className="table__item">
                <div className="table__item__container">
                  <div className="table__item-label">INVENTORY ITEM</div>
                  <span className="table__item-text">{inventory.itemName}</span>
                  <img
                    className="table__item-right"
                    src={rightIcon}
                    alt="right icon"
                  />
                </div>

                <div className="table__item__container">
                  <div className="table__item-label">STATUS</div>
                  <span className="table__item-text">{inventory.status}</span>
                </div>

                <div className="table__item__container">
                  <div className="table__item-label">CATEGORY</div>
                  <span className="table__item-text">{inventory.category}</span>
                </div>

                <div className="table__item__container">
                  <div className="table__item-label">QTY</div>
                  <span className="table__item-text">{inventory.quantity}</span>
                </div>

                <div className="table__item__container">
                  <div className="table__item-label">WAREHOUSE</div>
                  <span className="table__item-text">
                    {inventory.warehouseName}
                  </span>
                </div>

                <div className="table__item__icons">
                  <img
                    className="table__item__icons--delete"
                    src={deleteIcon}
                    alt="delete"
                  />

                  <img
                    className="table__item__icons--edit"
                    src={editIcon}
                    alt="edit"
                  />
                </div>
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
