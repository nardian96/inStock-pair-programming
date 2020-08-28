import React from "react";

function WarehouseInfo(props) {
  return (
    <div className="warehouse-info">
      <div className="warehouse-info__contact-left">
        <div className="warehouse-info__address-container">
          <h4>WAREHOUSE ADDRESS</h4>
          <p>{props.warehouseInfo.address}</p>
          <p>{`${props.warehouseInfo.city}, ${props.warehouseInfo.country}`}</p>
        </div>
      </div>
      <div className="warehouse-info__contact-right">
        <div className="warehouse-info__contact-name-container">
          <h4>CONTACT NAME</h4>
          <p>{props.warehouseInfo.contact.name}</p>
          <p>{props.warehouseInfo.contact.position}</p>
        </div>
        <div className="warehouse-info__contact-info-container">
          <h4>CONTACT INFORMATION</h4>
          <p>{props.warehouseInfo.contact.phone}</p>
          {/* <p>{warehouseInfo.contact.email}</p> */}
        </div>
      </div>
    </div>
  );
}

export default WarehouseInfo;
