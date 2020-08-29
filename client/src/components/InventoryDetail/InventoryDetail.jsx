import React, { Component } from "react";
import InventoryHeader from "./InventoryHeader.jsx";
import InventoryInfo from "./InventoryInfo.jsx";

function InventoryDetails(props) {
  if (!props.items && !props.match.params) {
    return <p>loading here</p>;
  }
  const items = props.items;
  console.log(props.match.params);
  console.log(items);

  const inventoryId = props.match.params.inventoryId;
  console.log(inventoryId);
  const warehouseId = props.match.params.warehouseId;
  const warehouseInventory = items.filter(
    (place) => place.warehouseID === warehouseId
  );
  const inventoryDetails = warehouseInventory.filter((place) => {
    return place.id === inventoryId;
  });
  console.log(inventoryDetails);
  return (
    <div className="inventory-detail">
      <div className="inventory-detail__container">
        <InventoryHeader inventoryName={inventoryDetails[0]} />
        <InventoryInfo inventoryInfo={inventoryDetails[0]} />
      </div>
      <p className="inventory-detail__copyright">
        &#169; InStock Inc. All Rights Reserved
      </p>
    </div>
  );
}
export default InventoryDetails;
