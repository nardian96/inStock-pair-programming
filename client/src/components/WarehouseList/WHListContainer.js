import React from 'react'
import WHListItem from './WHListItem'
import sortIcon from '../../assets/Icons/sort-24px.svg'

function WHListContainer(props) {
    return (
        <>
        <div className="list__main-header">
            <div className="list__main-subheader">
                <h4>WAREHOUSE</h4>
                <img src={sortIcon}/>
            </div>
            <div className="list__main-subheader">
                <h4>ADDRESS</h4>
                <img src={sortIcon}/>
            </div>
            <div className="list__main-subheader">
                <h4>CONTACT NAME</h4>
                <img src={sortIcon}/>
            </div>
            <div className="list__main-subheader">
                <h4>CONTACT INFORMATION</h4>
                <img src={sortIcon}/>
            </div>
            <h4>ACTIONS</h4>
        </div>
        <ul className="warehouse__list-container">
            {props.warehouses
            .map((warehouse) => (
                <WHListItem key={warehouse.id} warehouseItem={warehouse}/>
            ))}  
        </ul>
        </>
    )
}

export default WHListContainer
