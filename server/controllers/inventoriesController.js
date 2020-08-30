// load models
const inventories = require("../models/inventoriesModel");

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
  console.log(req.body);
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

// export functions
module.exports = { getInventories, addInventory, updateInventory };
