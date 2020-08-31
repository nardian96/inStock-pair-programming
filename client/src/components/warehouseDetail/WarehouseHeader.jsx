import React from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/Icons/edit-24px-white.svg";
import { Link } from "react-router-dom";

function WarehouseHeader(props) {
  return (
    <div className="warehouse-header">
      <div className="warehouse-header__header-left">
        <h1 className="warehouse-header__warehouse-name">
          <Link to="/warehouse/">
            <img
              src={backArrow}
              className="warehouse-header__backArrow"
              alt="back arrow"
            />
          </Link>

          {props.warehouseName}
        </h1>
      </div>
      <div className="warehouse-header__header-right">
        <button className="warehouse-header__edit-button">
          <Link to={`/warehouse/${props.id}/edit/`}>
            <img
              src={editIconWhite}
              alt="edit icon"
              className="warehouse-header__edit-icon"
            />
            <span>Edit</span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default WarehouseHeader;
