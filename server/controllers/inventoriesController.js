// load models
const inventories = require("../models/inventoriesModel");

<<<<<<< HEAD
function getInventories(req, res) {
  res.json(inventories.inventoriesList());
}
=======
function getInventories(_req, res) {
  res.json(inventories.inventoryList());
}

>>>>>>> master
// export functions
module.exports = { getInventories };
