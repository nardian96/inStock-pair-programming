import React from "react";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import ModalWindow from "../ModalWindow.jsx";

function WarehouseItem(props) {
  const warehouseId = props.item.warehouseID;
  const itemId = props.item.id;
  const category = props.item.category;
  const quantity = props.item.quantity;
  const name = props.item.itemName;
  const status = props.item.status;
  const info = {
    name: name,
    item: "inventory",
    action: props.action,
    id: itemId,
  };

  // props.info.setWarehouse;

  return (
    <div className="warehouse-item">
      <div className="warehouse-item__left">
        <h4 className="warehouse-item__label">INVENTORY ITEM</h4>
        <Link
          to={`/inventoryDetails/${warehouseId}/${itemId}/1`}
          className="warehouse-item__link"
        >
          <p className="warehouse-item__name">
            {name}
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
        <ModalWindow info={info}></ModalWindow>

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
