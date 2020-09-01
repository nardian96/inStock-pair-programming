import React from "react";
import WHList from "./WHList";

function Warehouse(props) {
  console.log(props);
  return (
    <section className="warehouse__list">
      <WHList warehouses={props.warehouses} action={props.action} />
      <p className="warehouse-detail__copyright">
        &#169; InStock Inc. All Rights Reserved
      </p>
    </section>
  );
}

export default Warehouse;
