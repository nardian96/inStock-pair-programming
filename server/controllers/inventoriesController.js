// load models
const inventories = require("../models/inventoriesModel");

function getInventories(_req, res) {
  res.json(inventories.inventoryList());
}

// export functions
module.exports = { getInventories };
