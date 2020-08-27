import React from 'react'
import WHListHeader from './WHListHeader'
import WHListContainer from './WHListContainer'

function Warehouse(props) {
    return (
        <section className="warehouse__list">
            <WHListHeader />
            <WHListContainer warehouses={props.warehouses} />
        </section>
    )
}

export default Warehouse
