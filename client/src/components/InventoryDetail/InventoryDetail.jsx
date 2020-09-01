import React from "react";
import InventoryHeader from "./InventoryHeader.jsx";
import InventoryInfo from "./InventoryInfo.jsx";

function InventoryDetails(props) {
  if (!props.items || !props.match.params) {
    return <p>loading here</p>;
  }
  const items = props.items;

  const inventoryId = props.match.params.inventoryId;
  const warehouseId = props.match.params.warehouseId;
  const warehouseInventory = items.filter(
    (place) => place.warehouseID === warehouseId
  );
  const inventoryDetails = warehouseInventory.filter((place) => {
    return place.id === inventoryId;
  });
  return (
    <div className="inventory-detail">
      <div className="inventory-detail__container">
        <InventoryHeader inventoryName={inventoryDetails[0]} {...props} />
        <InventoryInfo
          inventoryInfo={inventoryDetails[0]}
          action={props.action}
        />
      </div>
      <p className="inventory-detail__copyright">
        &#169; InStock Inc. All Rights Reserved
      </p>
    </div>
  );
}
export default InventoryDetails;
