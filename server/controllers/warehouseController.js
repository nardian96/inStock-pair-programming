// load models
const warehouse = require("../models/warehouseModel");
const express = require("express");
const inventory = require("../models/inventoriesModel");

//get list of warehouses
function getWarehouse(req, res) {
  res.json(warehouse.warehouseList());
}

//post new warehouse
function postWarehouse(req, res) {
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contact.name ||
    !req.body.contact.phone ||
    !req.body.contact.email
  ) {
    res.status(400).json({
      error: "POST body must contain all requiredProperties",
      requiredProperties: [
        "name",
        "address",
        "city",
        "country",
        "contactName",
        "contactPhone",
        "contactEmail",
      ],
    });
  }
  res.json(warehouse.addWarehouse(req.body));
}

function deleteWarehouse(req, res) {
  console.log(req.params);
  res.json(warehouse.removeWarehouse(req.params.warehouseId));
}

//edit warehouse
function editWarehouse(req, res) {
  if (req.params.warehouseId !== "") {
    res.json(warehouse.updateWarehouse(req.params.warehouseId, req.body));
  }
}

// get Warehouse by id
function getWarehouseByID(req, res) {
  console.log(req.params);
  res.json(warehouse.getByID(req.params.id));
}
function getWarehouseInventory(req, res) {
  console.log(req.params);
  const warehouseId = warehouse.getByID(req.params.id);
  res
    .json(inventory.inventoriesList)
    .filter((item) => item.warehouseId === warehouseId);
}

function sortWarehouse(req, res) {
  const propList = ["name", "address", "contactName", "contactEmail"];
  if (!propList.includes(req.params.property)) {
    res.status(404).json({ message: "No property associated with that field" });
  } else {
    res.json(warehouse.sortWarehouse(req.params.property));
  }
}

// export functions

module.exports = {
  getWarehouse,
  postWarehouse,
  deleteWarehouse,
  editWarehouse,
  getWarehouseByID,
  getWarehouseInventory,
  sortWarehouse,
};
