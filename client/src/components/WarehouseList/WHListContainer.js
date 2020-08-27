import React from 'react'
import WHListItem from './WHListItem'

function WHListContainer(props) {
    return (
        <ul className="warehouse__list-container">
            {props.warehouses
            .map((warehouse) => (
                <WHListItem key={warehouse.id} warehouseItem={warehouse}/>
            ))}  
        </ul>
    )
}

export default WHListContainer
