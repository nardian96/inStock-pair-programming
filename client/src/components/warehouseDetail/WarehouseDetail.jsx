import React, { useState } from "react";
import WarehouseItem from "./WarehouseItem.jsx";
import WarehouseHeader from "./WarehouseHeader.jsx";
import WarehouseInfo from "./WarehouseInfo.jsx";
import sortIcon from "../../assets/Icons/sort-24px.svg";

let property = "";
let sortStatus = true;

function WarehouseDetail(props) {
  let update = useForceUpdate();
  function updateProp(val) {
    property = val;
    sortStatus = !sortStatus;
    update();
  }
  const { warehouseItems, warehouseInfo, action } = props;

  const warehouseId = props.match.params.warehouseId;
  let warehouseInventory = warehouseItems.filter(
    (place) => place.warehouseID === warehouseId
  );
  warehouseInventory = sortInventories(
    property,
    warehouseInventory,
    sortStatus
  );
  const warehouseList = warehouseInventory.map((item, index) => {
    return <WarehouseItem key={index} item={item} action={action} />;
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
        <WarehouseHeader
          warehouseName={warehouseDetails[0].name}
          id={warehouseDetails[0].id}
        />
        <WarehouseInfo warehouseInfo={warehouseDetails[0]} />
        <div className="warehouse-detail__label">
          <h4 className="warehouse-detail__label-item">
            INVENTORY ITEM{" "}
            <img
              src={sortIcon}
              alt=""
              onClick={() => {
                updateProp("itemName");
              }}
            />
          </h4>
          <h4 className="warehouse-detail__label-category">
            CATEGORY{" "}
            <img
              src={sortIcon}
              alt=""
              onClick={() => {
                updateProp("category");
              }}
            />
          </h4>
          <h4 className="warehouse-detail__label-status">
            STATUS{" "}
            <img
              src={sortIcon}
              alt=""
              onClick={() => {
                updateProp("status");
              }}
            />
          </h4>
          <h4 className="warehouse-detail__label-qty">
            QUANTITY{" "}
            <img
              src={sortIcon}
              alt=""
              onClick={() => {
                updateProp("quantity");
              }}
            />
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

function sortInventories(property, list, status) {
  const inventoryArray = list;
  let sortedArray = [];
  if (property !== "" && inventoryArray.length !== 0) {
    sortedArray = inventoryArray.sort((a, b) => {
      let propA = "";
      let propB = "";
      if (property !== "quantity") {
        propA = a[property].toUpperCase();
        propB = b[property].toUpperCase();
      } else {
        propA = a[property];
        propB = b[property];
      }
      let comparison = 0;
      if (propA > propB) {
        comparison = 1;
      } else if (propA < propB) {
        comparison = -1;
      }
      return comparison;
    });
  }
  if (!status) {
    sortedArray = sortedArray.reverse();
  }

  if (sortedArray.length === 0) {
    sortedArray = list;
  }
  return sortedArray;
}

// Function to update state
function useForceUpdate(prop) {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

export default WarehouseDetail;
