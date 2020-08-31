// load models
const inventories = require("../models/inventoriesModel");

// get list of inventories
function getInventories(req, res) {
  res.json(inventories.inventoriesList());
}

// post new inventory
function addInventory(req, res) {
  if (
    !req.body.itemName ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    isNaN(req.body.quantity) ||
    !req.body.warehouseName
  ) {
    res.status(400).send({
      error: "POST body must contain all required properties",
      requiredProperties: [
        "itemName",
        "description",
        "category",
        "status",
        "quantity",
        "warehouse",
      ],
    });
  } else {
    res.json(inventories.add(req.body));
  }
}

function updateInventory(req, res) {
  const inventoryIndex = inventories
    .inventoriesList()
    .findIndex((inv) => inv.id === req.params.inventoryId);
  if (inventoryIndex === -1) {
    res.status(404).json({ message: "No inventory with that id exists" });
  } else if (
    !req.body.itemName ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    isNaN(req.body.quantity) ||
    !req.body.warehouseName
  ) {
    res.status(400).send({
      error: "PUT body must contain all required properties",
      requiredProperties: [
        "itemName",
        "description",
        "category",
        "status",
        "quantity",
        "warehouse",
      ],
    });
  } else {
    res.json(inventories.update(inventoryIndex, req.body));
  }
}

// get inventory by ID
function getInventoryByID(req, res) {
  res.json(inventories.getSingleInventory(req.params.inventoryId));
}

// remove inventory by ID
function removeInventoryByID(req, res) {
  console.log(req.params.inventoryId);
  res.json(inventories.deleteInventory(req.params.inventoryId));
}
function removeInventoryByWarehouse(req, res) {
  res.json(inventories.deleteInventoryByWarehouse(req.params.warehouseId));
}

function sortInventories(req, res) {
  const propList = [
    "itemName",
    "category",
    "status",
    "quantity",
    "warehouseName",
  ];
  if (!propList.includes(req.params.property)) {
    res.status(404).json({ message: "No property associated with that field" });
  } else {
    res.json(inventories.sortInventories(req.params.property, true));
  }
}

// export functions
module.exports = {
  getInventories,
  getInventoryByID,
  removeInventoryByID,
  addInventory,
  updateInventory,

  removeInventoryByWarehouse,

  sortInventories,

};
