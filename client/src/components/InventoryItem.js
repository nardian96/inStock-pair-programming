import React from "react";
import { Link } from "react-router-dom";

function InventoryItem({ id, name, description, category, status, quantity }) {
  return (
    <li className="inventory__id" id={id}>
      ````````
      <div className="inventory__name">
        <h4>{name}</h4>
      </div>
      <div className="inventory__description">
        <p>{description}</p>
      </div>
      <div className="inventory__category">
        <p>{category}</p>
      </div>
      <div className="inventory__status">
        <p>{status}</p>
      </div>
      <div className="inventory__quantity">
        <p>{quantity}</p>
      </div>
    </li>
  );
}
export default InventoryItem;
