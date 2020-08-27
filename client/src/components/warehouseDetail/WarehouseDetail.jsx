import React from "react";
import WarehouseItem from "./WarehouseItem.jsx";
import WarehouseHeader from "./WarehouseHeader.jsx";
import WarehouseInfo from "./WarehouseInfo.jsx";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function WarehouseDetail({ warehouseItems, warehouseInfo }) {
  const warehouseList = warehouseItems.map((item, index) => {
    return <WarehouseItem key={index} item={item} />;
  });

  if (!warehouseInfo) {
    return <p>loading</p>;
  }
  return (
    <div className="warehouse-detail">
      <div className="warehouse-detail__container">
        <WarehouseHeader warehouseName={warehouseInfo[0].name} />
        <WarehouseInfo warehouseInfo={warehouseInfo[0]} />
        <div className="warehouse-detail__label">
          <h4 className="warehouse-detail__label-item">
            INVENTORY ITEM <img src={sortIcon} alt="" />
          </h4>
          <h4 className="warehouse-detail__label-category">
            CATEGORY <img src={sortIcon} alt="" />
          </h4>
          <h4 className="warehouse-detail__label-status">
            STATUS <img src={sortIcon} alt="" />
          </h4>
          <h4 className="warehouse-detail__label-qty">
            QUANTITY <img src={sortIcon} alt="" />
          </h4>
          <h4 className="warehouse-detail__label-actions">ACTIONS</h4>
        </div>
        <ul className="warehouse-detail__list">{warehouseList}</ul>
      </div>
    </div>
  );
}

export default WarehouseDetail;
