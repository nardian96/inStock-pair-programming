import React from "react";
import WHList from "./WHList";

function Warehouse(props) {
  return (
    <section className="warehouse__list">
      <WHList warehouses={props.warehouses} action={props.action} />
    </section>
  );
}

export default Warehouse;
