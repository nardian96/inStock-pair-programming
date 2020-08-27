import React from "react";
import deleteIcon from "../assets/Icons/delete-outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

function WarehouseItem(props) {
  return (
    <div className="warehouse-item">
      <div className="warehouse-item__left">
        <h4 className="warehouse-item__label">INVENORY ITEM</h4>
        <p className="warehouse-item__name">{props.item.itemName}</p>
        <h4 className="warehouse-item__label">CATEGORY</h4>
        <p className="warehouse-item__category">{props.item.category}</p>
      </div>
      <div className="warehouse-item__right">
        <h4 className="warehouse-item__label">STATUS</h4>
        {props.item.quantity ? (
          <p className="warehouse-item__status--inStock warehouse-item__status">
            {props.item.status}
          </p>
        ) : (
          <p className="warehouse-item__status--noStock warehouse-item__status">
            {props.item.status}
          </p>
        )}
      </div>
      <div className="warehouse-item__actions">
        <img
          src={deleteIcon}
          alt="delete icon"
          className="warehouse-item__delete-button"
        />
        <img
          src={editIcon}
          alt="edit icon"
          className="warehouse-item__edit-button"
        />
      </div>
    </div>
  );
}

export default WarehouseItem;
