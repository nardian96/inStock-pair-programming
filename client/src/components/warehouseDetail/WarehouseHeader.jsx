import React from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

function WarehouseHeader(props) {
  return (
    <div className="warehouse-header">
      <div className="warehouse-header__header-left">
        <h1 className="warehouse-header__warehouse-name">
          <img
            src={backArrow}
            className="warehouse-header__backArrow"
            alt="back arrow"
          />
          {props.warehouseName}
        </h1>
      </div>
      <div className="warehouse-header__header-right">
        <button className="warehouse-header__edit-button">
          <img
            src={editIcon}
            alt="edit icon"
            className="warehouse-header__edit-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default WarehouseHeader;
