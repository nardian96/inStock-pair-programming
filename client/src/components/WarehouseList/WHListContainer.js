import React from 'react'
import WHListItem from './WHListItem'

function WHListContainer(props) {
    return (
        <ul>
            {props.warehouses
            .map((warehouse) => (
                <WHListItem key={warehouse.id} warehouseItem={warehouse}/>
            ))}  
        </ul>
    )
}

export default WHListContainer
