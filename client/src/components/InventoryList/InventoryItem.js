import React from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import rightIcon from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

export default function InventoryItem(props) {
  return (
    <>
      {props.inventories.map((inventory, index) => {
        let status = inventory.status.toUpperCase();
        let statusClass = "";
        if (status === "IN STOCK") {
          statusClass = "status-in";
        } else {
          statusClass = "status-out";
        }

        return (
          <React.Fragment key={index}>
            <div className="table__item">
              <div className="table__item__container">
                <div className="table__item-label">INVENTORY ITEM</div>
                <Link
                  className="table__item-link"
                  to={`/inventoryDetails/${inventory.warehouseId}/${inventory.id}`}
                >
                  <span className="table__item-text">{inventory.itemName}</span>
                  <img
                    className="table__item-right"
                    src={rightIcon}
                    alt="right icon"
                  />
                </Link>
              </div>

              <div className="table__item__container">
                <div className="table__item-label">STATUS</div>
                <span className={`table__item-text status ${statusClass}`}>
                  {status}
                </span>
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
            <hr className="inventory--break" />
          </React.Fragment>
        );
      })}
    </>
  );
}
