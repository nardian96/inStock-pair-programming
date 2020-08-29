// load models
const warehouse = require("../models/warehouseModel");
const inventory = require("../models/inventoriesModel");

//get list of warehouses
function getWarehouse(req, res) {
  res.json(warehouse.warehouseList());
}

function deleteWarehouse(req, res) {
  res.json(warehouse.removeWarehouse(req.params.id));
}

function editWarehouse(req, res) {
  res.json(warehouse.updateWarehouse(req.params.id, req.body));
}
// get Video by id
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

// export functions
module.exports = {
  getWarehouse,
  deleteWarehouse,
  editWarehouse,
  getWarehouseByID,
  getWarehouseInventory,
};
