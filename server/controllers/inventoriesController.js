// load models
const inventories = require("../models/inventoriesModel");

// get list of inventories
function getInventories(req, res) {
  res.json(inventories.inventoriesList());
}

// get inventory by ID
function getInventoryByID(req, res) {
  res.json(inventories.getSingleInventory(req.params.inventoryId));
}

// remove inventory by ID
function removeInventoryByID(req, res) {
  res.json(inventories.deleteInventory(req.params.inventoryId));
}

// export functions
module.exports = { getInventories, getInventoryByID, removeInventoryByID };
