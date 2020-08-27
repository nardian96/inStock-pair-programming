import React from "react";
import WarehouseItem from "./WarehouseItem.jsx";
import WarehouseHeader from ".WarehouseHeader.jsk";
import WarehouseInfo from "./WarehouseInfo.jsx";
import sortIcon from "../assets/Icons/sort-24px.svg";

function WarehouseDetail(warehouseItems, warehouseInfo) {
  const warehouseList = warehouseItems.map((item) => {
    if (item.warehouseID === warehouseInfo.id)
      <WarehouseItem key={item.name} item={item} />;
  });

  return (
    <div className="warehouse-detail">
      <div className="warehouse-detail__container">
        <WarehouseHeader name={warehouseInfo.name} />
        <WarehouseInfo warehouseInfo={warehouseInfo} />
        <div className="warehouse-detail__label">
          <h4 className="warehouse-detail__label-item">
            INVENTORY ITEM {sortIcon}
          </h4>
          <h4 className="warehouse-detail__label-category">
            CATEGORY {sortIcon}
          </h4>
          <h4 className="warehouse-detail__label-status">STATUS {sortIcon}</h4>
          <h4 className="warehouse-detail__label-qty">QUANTITY {sortIcon}</h4>
          <h4 className="warehouse-detail__label-actions">ACTIONS</h4>
        </div>
        <ul className="warehouse-detail__list">{warehouseList}</ul>
      </div>
    </div>
  );
}

export default WarehouseDetail;
