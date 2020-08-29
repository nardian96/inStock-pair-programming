import React from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

function WarehouseItem(props) {
  const warehouseId = props.item.warehouseID;
  const itemId = props.item.id;
  const category = props.item.category;
  const quantity = props.item.quantity;
  const status = props.item.status;
  return (
    <div className="warehouse-item">
      <div className="warehouse-item__left">
        <h4 className="warehouse-item__label">INVENORY ITEM</h4>
        <Link
          to={`/inventoryDetails/${warehouseId}/${itemId}`}
          className="warehouse-item__link"
        >
          <p className="warehouse-item__name">
            {props.item.itemName}
            <img src={chevron} alt="" />
          </p>
        </Link>
        <h4 className="warehouse-item__label">CATEGORY</h4>
        <p className="warehouse-item__category">{category}</p>
      </div>
      <div className="warehouse-item__right">
        <h4 className="warehouse-item__label">STATUS</h4>
        <div className="warehouse-item__status-container">
          {props.item.quantity ? (
            <p className="warehouse-item__status--inStock warehouse-item__status">
              {status}
            </p>
          ) : (
            <p className="warehouse-item__status--noStock warehouse-item__status">
              {status}
            </p>
          )}
        </div>
        <h4 className="warehouse-item__label">QTY</h4>
        <p className="warehouse-item__quantity">{quantity}</p>
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
