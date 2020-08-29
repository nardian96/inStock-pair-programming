// load models
const inventories = require("../models/inventoriesModel");

// get list of inventories
function getInventories(req, res) {
  res.json(inventories.inventoriesList());
}

// get inventory by ID
function getInventoryByID(req, res) {
  console.log(req)
  res.json(inventories.getSingleInventory(req.params.inventoryId));
}

// export functions
module.exports = { getInventories, getInventoryByID };
