import React from 'react'
import WHListItem from './WHListItem'
import sortIcon from '../../assets/Icons/sort-24px.svg'

function WHListContainer(props) {
    return (
        <>
        <div className="list__main-header">
            <div className="list__main-subheader list__main-subheader--one">
                <h4>WAREHOUSE</h4>
                <img src={sortIcon}/>
            </div>
            <div className="list__main-subheader list__main-subheader--two">
                <h4>ADDRESS</h4>
                <img src={sortIcon}/>
            </div>
            <div className="list__main-subheader list__main-subheader--three">
                <h4>CONTACT NAME</h4>
                <img src={sortIcon}/>
            </div>
            <div className="list__main-subheader list__main-subheader--four">
                <h4>CONTACT INFORMATION</h4>
                <img src={sortIcon}/>
            </div>
            <div className="list__main-subheader list__main-subheader--five">
                <h4>ACTIONS</h4>
            </div>
        </div>
        <ul className="warehouse__list-container">
            {props.warehouses
            .map((warehouse) => (
                <WHListItem id={warehouse.id} key={warehouse.id} warehouseItem={warehouse}/>
            ))}  
        </ul>
        </>
    )
}

export default WHListContainer
