import React from 'react';
import InventoryItem from './InventoryItem';

function InventoryList(props) {
  console.log('InventoryList props', props.inventory);
  if (props.inventory === undefined) {
    return <p>Loading Inventory</p>;
  }

  return (
    <ul>
      {props.inventories.map((inventory) => (
        <InventoryItem
          key={inventory.warehouseID}
          id={inventory.warehouseID}
          name={inventory.itemName}
          description={inventory.description}
          category={inventory.category}
          status={inventory.status}
          quantity={inventory.quantity}
        />
      ))}
    </ul>
  );
}

export default InventoryList;
