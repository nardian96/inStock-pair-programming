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
    !req.body.quantity ||
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

// export functions
module.exports = { getInventories, addInventory };
