// load models
const warehouse = require("../models/warehouseModel");

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
  res.json(videos.getByID(req.params.id));
}

// export functions
module.exports = {
  getWarehouse,
  deleteWarehouse,
  editWarehouse,
  getWarehouseByID,
};
