import React from "react";
import sortIcon from "../../assets/Icons/sort-24px.svg";

export default function InventoryTableColumns({
  sortItem,
  sortCategory,
  sortStatus,
  sortQty,
  sortWarehouse,
  sort,
}) {
  let sortConditions = {
    item: sortItem,
    category: sortCategory,
    status: sortStatus,
    qty: sortQty,
    warehouse: sortWarehouse,
  };
  return (
    <div className="inventory-table__label">
      <div className="inventory-table__label-item">
        <h4>
          INVENTORY ITEM{" "}
          <img
            src={sortIcon}
            alt="sort"
            onClick={() => callSort(sortItem, "itemName", sortConditions, sort)}
          />
        </h4>
      </div>
      <div className="inventory-table__label-category">
        <h4>
          CATEGORY{" "}
          <img
            src={sortIcon}
            alt="sort"
            onClick={() =>
              callSort(sortCategory, "category", sortConditions, sort)
            }
          />
        </h4>
      </div>
      <div className="inventory-table__label-status">
        <h4>
          STATUS{" "}
          <img
            src={sortIcon}
            alt="sort"
            onClick={() => callSort(sortStatus, "status", sortConditions, sort)}
          />
        </h4>
      </div>
      <div className="inventory-table__label-qty">
        <h4>
          QTY{" "}
          <img
            src={sortIcon}
            alt="sort"
            onClick={() => callSort(sortQty, "quantity", sortConditions, sort)}
          />
        </h4>
      </div>
      <div className="inventory-table__label-warehouse">
        <h4>
          WAREHOUSE{" "}
          <img
            src={sortIcon}
            alt="sort"
            onClick={() =>
              callSort(sortWarehouse, "warehouseName", sortConditions, sort)
            }
          />
        </h4>
      </div>
      <div className="inventory-table__label-actions">
        <h4>ACTIONS</h4>
      </div>
    </div>
  );
}

function callSort(asc, property, sortConditions, sort) {
  if (property === "itemName") {
    sortConditions.item = !asc;
  } else if (property === "category") {
    sortConditions.category = !asc;
  } else if (property === "status") {
    sortConditions.status = !asc;
  } else if (property === "quantity") {
    sortConditions.qty = !asc;
  } else if (property === "warehouseName") {
    sortConditions.warehouse = !asc;
  }
  sort(asc, property, sortConditions);
}
