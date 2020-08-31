import React from "react";
import searchIcon from "../../assets/Icons/search-24px.svg";
import { Link } from "react-router-dom";

export default function InventoryHeader(props) {
  return (
    <div className="inventory__list-header">
      <h1 className="header__title">Inventory</h1>
      <div className="inventory__list-subheader">
        <form className="header__search-container">
          <label htmlFor="header__search" className="header__search-icon">
            <img src={searchIcon} alt="search icon" />
          </label>
          <input
            className="header__search"
            type="search"
            placeholder="Search..."
            value={props.searchValue}
            onChange={props.searchChange}
          />
        </form>

        <button
          className="header__button"
          onClick={() => props.history.push("/Inventories/add")}
        >
          + Add New Item
        </button>
      </div>
    </div>
  );
}
