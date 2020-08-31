import React from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import detailIcon from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import ModalWindow from "../ModalWindow.jsx";

function WHListItem(props) {
  const info = {
    name: props.warehouseItem.name,
    item: "warehouse",
    action: props.action,
    id: props.id,
  };

  return (
    <>
      <li className="list">
        <div className="list__subcontainer-wrapper">
          <div className="list__subcontainer list__subcontainer--one">
            <div className="list__warehouse">
              <h4>WAREHOUSE</h4>
              <div className="list__warehouse-wrapper">
                <Link to={`/warehouse/${props.warehouseItem.id}`}>
                  <h3>{props.warehouseItem.name}</h3>
                  <img src={detailIcon} />{" "}
                </Link>
              </div>
            </div>
            <div className="list__address">
              <h4>ADDRESS</h4>
              <p>
                {props.warehouseItem.address}, {props.warehouseItem.city},{" "}
                {props.warehouseItem.country}
              </p>
            </div>
          </div>
          <div className="list__subcontainer list__subcontainer--two">
            <div className="list__contact-name">
              <h4>CONTACT NAME</h4>
              <p>{props.warehouseItem.contact.name}</p>
            </div>
            <div className="list__contact-info">
              <h4>CONTACT INFORMATION</h4>
              <p>{props.warehouseItem.contact.phone}</p>
              <p>{props.warehouseItem.contact.email}</p>
            </div>
          </div>
        </div>
        <div className="list__icons">
          <ModalWindow info={info} action={props.action}></ModalWindow>

          <Link to={`/warehouse/${props.id}/edit`}>
            <img src={editIcon} />
          </Link>
        </div>
      </li>
    </>
  );
}

export default WHListItem;
