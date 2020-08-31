import React from "react";
import searchIcon from "../../assets/Icons/search-24px.svg";

export default function InventoryHeader(props) {
  return (
    <div className="page-header">
      <h1 className="page-header__h1">Inventory</h1>
      <input
        className="page-header-search"
        type="text"
        placeholder="Search"
        value={props.searchValue}
        onChange={props.searchChange}
      />
      <button
        className="page-header-link"
        onClick={() => props.history.push("/Inventories/add")}
      >
        + Add New Item
      </button>
    </div>
  );
}
