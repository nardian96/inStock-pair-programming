// load models
const warehouse = require("../models/warehouseModel");
const inventory = require("../models/inventoriesModel");

//get list of warehouses
function getWarehouse (req, res) {
    res.json(warehouse.warehouseList())
}

//post new warehouse
function postWarehouse (req, res) {
    if (!req.body.name || !req.body.address || !req.body.city || !req.body.country 
        || !req.body.contact.name || !req.body.contact.phone || !req.body.contact.email) {
        res.status(400).json({
            error: 'POST body must contain all requiredProperties',
            requiredProperties: ['name', 'address', 'city', 'country','contactName', 'contactPhone', 'contactEmail']
        });
    }
    res.json(warehouse.addWarehouse(req.body))
}

function deleteWarehouse(req, res) {
  res.json(warehouse.removeWarehouse(req.params.id));
}

function editWarehouse(req, res) {
  res.json(warehouse.updateWarehouse(req.params.id, req.body));
}
// get Warehouse by id
function getWarehouseByID(req, res) {
  console.log(req.params);
  res.json(warehouse.getByID(req.params.id));
<<<<<<< HEAD
}
function getWarehouseInventory(req, res) {
  console.log(req.params);
  const warehouseId = warehouse.getByID(req.params.id);
  res
    .json(inventory.inventoriesList)
    .filter((item) => item.warehouseId === warehouseId);
=======
>>>>>>> master
}

// export functions

module.exports = {
  getWarehouse,
  postWarehouse,
  deleteWarehouse,
  editWarehouse,
  getWarehouseByID,
  getWarehouseInventory,
};
