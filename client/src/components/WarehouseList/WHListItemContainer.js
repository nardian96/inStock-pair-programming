import React from "react";
import WHListItem from "./WHListItem";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function WHListItemContainer(props) {
  let sortConditions = {
    name: props.sortName,
    address: props.sortAddress,
    contactName: props.sortContactName,
    contactEmail: props.sortContactEmail,
  };

  return (
    <>
      <div className="list__main-header">
        <div className="list__main-subheader list__main-subheader--one">
          <h4>WAREHOUSE</h4>
          <img
            src={sortIcon}
            alt="sort"
            onClick={() =>
              callSort(props.sortName, "name", sortConditions, props.sort)
            }
          />
        </div>
        <div className="list__main-subheader list__main-subheader--two">
          <h4>ADDRESS</h4>
          <img
            src={sortIcon}
            alt="sort"
            onClick={() =>
              callSort(props.sortAddress, "address", sortConditions, props.sort)
            }
          />
        </div>
        <div className="list__main-subheader list__main-subheader--three">
          <h4>CONTACT NAME</h4>
          <img
            src={sortIcon}
            alt="sort"
            onClick={() =>
              callSort(
                props.sortContactName,
                "contactName",
                sortConditions,
                props.sort
              )
            }
          />
        </div>
        <div className="list__main-subheader list__main-subheader--four">
          <h4>CONTACT INFORMATION</h4>
          <img
            src={sortIcon}
            alt="sort"
            onClick={() =>
              callSort(
                props.sortContactEmail,
                "contactEmail",
                sortConditions,
                props.sort
              )
            }
          />
        </div>
        <div className="list__main-subheader list__main-subheader--five">
          <h4>ACTIONS</h4>
        </div>
      </div>
      <ul className="warehouse__list-container">
        {/* {props.warehouses */}
        {props.filteredList.map((warehouse) => (
          <WHListItem
            id={warehouse.id}
            key={warehouse.id}
            warehouseItem={warehouse}
            action={props.action}
          />
        ))}
      </ul>
    </>
  );
}

export default WHListItemContainer;

function callSort(asc, property, sortConditions, sort) {
  if (property === "name") {
    sortConditions.name = !asc;
  } else if (property === "address") {
    sortConditions.address = !asc;
  } else if (property === "contactName") {
    sortConditions.contactName = !asc;
  } else if (property === "contactEmail") {
    sortConditions.contactEmail = !asc;
  }
  sort(asc, property, sortConditions);
}
