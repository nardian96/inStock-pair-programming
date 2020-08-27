import React from "react";
import deleteIcon from "../assets/icons/delete_outline-24px.svg";
import editIcon from "../assets/icons/edit-24px.svg";
import rightIcon from "../assets/icons/chevron_right-24px.svg";

export default function Inventory(props) {
  return (
    <>
      <div className="table-header">
        <h1>Inventory</h1>
        <input
          className="table-header-search"
          type="text"
          placeholder="Search"
        />
        <button className="table-header-button"> + Add New Item</button>
      </div>
      <hr />
      <div className="table__container">
        {props.inventories.map((inventory, index) => {
          return (
            <div key={index} className="table__item">
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
          );
        })}
      </div>
    </>
  );
}
