// load models
const inventories = require("../models/inventoriesModel");

function getInventories(req, res) {
  res.json(inventories.inventoryList());
}

// export functions
module.exports = { getInventories };
