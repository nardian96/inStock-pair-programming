import React from "react";

function InventoryInfo(props) {
  if (!props.inventoryInfo.warehouseName) {
    return <p>loading more</p>;
  }
  const status = props.inventoryInfo.status;

  return (
    <div className="inventory-info">
      <div className="inventory-info__left">
        <div className="inventory-info__description">
          <h4 className="inventory-info__label">ITEM DESCRIPTION:</h4>
          <p>{props.inventoryInfo.description}</p>
        </div>
        <div className="inventory-info__category">
          <h4 className="inventory-info__label">CATEGORY:</h4>
          <p>{props.inventoryInfo.category}</p>
        </div>
      </div>
      <div className="inventory-info__right">
        <div className="inventory-info__right-inner">
          <div className="inventory-info__status-container">
            <h4 className="inventory-info__label">STATUS:</h4>
            {props.inventoryInfo.quantity ? (
              <p className="inventory-info__status--inStock inventory-info__status">
                {status}
              </p>
            ) : (
              <p className="inventory-info__status--noStock inventory-info__status">
                {status}
              </p>
            )}
          </div>
          <div className="inventory-info__quantity-container">
            <h4 className="inventory-info__label">QTY:</h4>
            <p className="inventory-info__quantity">
              {props.inventoryInfo.quantity}
            </p>
          </div>
        </div>
        <div className="inventory-info__bottom">
          <h4 className="inventory-info__label">WAREHOUSE:</h4>
          <p className="inventory-info__warehouse">
            {props.inventoryInfo.warehouseName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InventoryInfo;
