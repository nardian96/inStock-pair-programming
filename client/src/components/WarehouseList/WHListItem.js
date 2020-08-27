import React from 'react'
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg'
import editIcon from '../../assets/Icons/edit-24px.svg'
// import { Link } from 'react-router-dom'

function WHListItem(props) {
    return (
        <>
        <li>
            <div>
                <h4>WAREHOUSE</h4>
                <h3>{props.warehouseItem.name}</h3>
            </div>
            <div>
                <h4>CONTACT NAME</h4>
                <p>{props.warehouseItem.contact.name}</p>
            </div>
            <div>
                <h4>ADDRESS</h4>
                <p>
                    {props.warehouseItem.address}
                    {props.warehouseItem.city}
                    {props.warehouseItem.country}
                </p>
            </div>
            <div>
                <h4>CONTACT INFORMATION</h4>
                <p>
                    {props.warehouseItem.contact.phone}
                    {props.warehouseItem.contact.email}
                </p>
            </div>
            <div>
                <img src={deleteIcon} />
                <img src={editIcon} />
            </div>
        </li>
        </>
    )
}

export default WHListItem;
