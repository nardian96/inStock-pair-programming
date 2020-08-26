import React from 'react'
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg'
import editIcon from '../../assets/Icons/edit-24px.svg'
// import { Link } from 'react-router-dom'

function WHListItem() {
    return (
        <>
        <li>
            <div>
                <h4>WAREHOUSE</h4>
                <h3></h3>
            </div>
            <div>
                <h4>CONTACT NAME</h4>
                <p></p>
            </div>
            <div>
                <h4>ADDRESS</h4>
                <p></p>
            </div>
            <div>
                <h4>CONTACT INFORMATION</h4>
                <p></p>
            </div>
            <div>
                <div>{deleteIcon}</div>
                <div>{editIcon}</div>
            </div>
        </li>
        </>
    )
}

export default WHListItem;
