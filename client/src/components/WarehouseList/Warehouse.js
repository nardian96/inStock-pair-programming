import React from 'react'
import WHList from './WHList'

function Warehouse(props) {
    console.log(props)
    return (
        <section className="warehouse__list">
            <WHList warehouses={props.warehouses} />
        </section>
    )
}

export default Warehouse
