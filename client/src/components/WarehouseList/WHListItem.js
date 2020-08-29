import React from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import detailIcon from "../../assets/Icons/chevron_right-24px.svg";
// import { Link } from 'react-router-dom'

function WHListItem(props) {
    return (
        <>
        <li className="list">
            <div className="list__subcontainer">
                <div className="list__warehouse">
                    <h4>WAREHOUSE</h4>
                    <div className="list__warehouse-wrapper">
                        <h3>{props.warehouseItem.name}</h3>
                        <img src={detailIcon}/>
                    </div> 
                </div>
                <div className="list__contact-name">
                    <h4>CONTACT NAME</h4>
                    <p>{props.warehouseItem.contact.name}</p>
                </div>
            </div>
            <div className="list__subcontainer">
                <div className="list__address">
                    <h4>ADDRESS</h4>
    <p>{props.warehouseItem.address}, {props.warehouseItem.city}, {" "}
      {props.warehouseItem.country}</p>
                </div>
                <div className="list__contact-info">
                    <h4>CONTACT INFORMATION</h4>
                    <p>{props.warehouseItem.contact.phone}</p> 
                    <p>{props.warehouseItem.contact.email}</p>
                </div>
            </div>
            <div className="list__icons">
                <img src={deleteIcon} />
                <img src={editIcon} />
            </div>
        </li>
        </>
    )
}

export default WHListItem;
