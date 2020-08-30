import React, { Component } from "react";
import WarehouseItem from "./WarehouseItem.jsx";
import WarehouseHeader from "./WarehouseHeader.jsx";
import WarehouseInfo from "./WarehouseInfo.jsx";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function WarehouseDetail(props) {
  const { warehouseItems, warehouseInfo, info } = props;
  const warehouseId = props.match.params.warehouseId;
  const warehouseInventory = warehouseItems.filter(
    (place) => place.warehouseID === warehouseId
  );
  const warehouseList = warehouseInventory.map((item, index) => {
    return <WarehouseItem key={index} item={item} info={info} />;
  });
  const warehouseDetails = warehouseInfo.filter(
    (place) => place.id === warehouseId
  );
  if (!warehouseDetails[0]) {
    return <p>loading here</p>;
  }
  return (
    <div className="warehouse-detail">
      <div className="warehouse-detail__container">
        <WarehouseHeader warehouseName={warehouseDetails[0].name} />
        <WarehouseInfo warehouseInfo={warehouseDetails[0]} />
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
      <p className="warehouse-detail__copyright">
        &#169; InStock Inc. All Rights Reserved
      </p>
    </div>
  );
}
export default WarehouseDetail;
