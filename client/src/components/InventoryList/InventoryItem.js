import React from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import rightIcon from "../../assets/Icons/chevron_right-24px.svg";
import ModalWindow from "../ModalWindow.jsx";
import { Link } from "react-router-dom";

export default function InventoryItem(props) {
  return (
    <ul className="inventory__list--table">
      {props.inventories.map((inventory, index) => {
        let status = inventory.status.toUpperCase();
        let statusClass = "";
        const info = {
          name: inventory.itemName,
          item: "inventory",
          action: props.action,
          id: inventory.id,
        };
        if (status === "IN STOCK") {
          statusClass = "status-in";
        } else {
          statusClass = "status-out";
        }

        return (
          <React.Fragment key={index}>
            <div className="table__item">
              <div className="table__item__name">
                <h4 className="table__item-label">INVENTORY ITEM</h4>
                <Link
                  className="table__item-link"
                  to={`/inventoryDetails/${inventory.warehouseID}/${inventory.id}/0`}
                >
                  <p className="table__item-name">
                    {inventory.itemName}
                    <img src={rightIcon} alt="right icon" />
                  </p>
                </Link>
              </div>

              <div className="table__item__status">
                <h4 className="table__item-label">STATUS</h4>
                <p className={` status ${statusClass}`}>{status}</p>
              </div>

              <div className="table__item__category">
                <h4 className="table__item-label">CATEGORY</h4>
                <p className="table__item-text">{inventory.category}</p>
              </div>

              <div className="table__item__quantity">
                <h4 className="table__item-label">QTY</h4>
                <p className="table__item-text">{inventory.quantity}</p>
              </div>

              <div className="table__item__warehouse">
                <h4 className="table__item-label">WAREHOUSE</h4>
                <p className="table__item-text">{inventory.warehouseName}</p>
              </div>

              <div className="table__item__icons">
                <ModalWindow info={info}></ModalWindow>
                <Link
                  className="table__item__icons--link"
                  to={`/Inventories/${inventory.id}/edit`}
                >
                  <img
                    className="table__item__icons--edit"
                    src={editIcon}
                    alt="edit"
                  />
                </Link>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </ul>
  );
}
