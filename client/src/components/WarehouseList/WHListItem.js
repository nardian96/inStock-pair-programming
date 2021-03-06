import React from "react";
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
                <Link
                  className="list__warehouse-link"
                  to={`/warehouse/${props.warehouseItem.id}`}
                >
                  <h3>{props.warehouseItem.name}</h3>
                  <img src={detailIcon} alt="detail" />{" "}
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
          <ModalWindow info={info}></ModalWindow>

          <Link to={`/warehouse/${props.id}/edit`}>
            <img src={editIcon} alt="edit" />
          </Link>
        </div>
      </li>
    </>
  );
}

export default WHListItem;
