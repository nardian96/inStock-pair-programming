// load models
const products = require("../models/productsModel");

//get list of warehouses
function getProducts(req, res) {
  res.json(products.productsList());
  // warehouse.loadWarehouseData((warehouses) => {
  // const warehouseList = warehouses.map((warehouseItem) => {
  //     return {
  //         id: warehouseItem.id,
  //         name: warehouseItem.name,
  //         address: warehouseItem.address,
  //         city: warehouseItem.city,
  //         country: warehouseItem.country,
  //         contactName: warehouseItem.contact.name,
  //         contactPhone: warehouseItem.contact.phone,
  //         contactEmail: warehouseItem.contact.email,
  //     }
  // })
  // res.json(warehouseList);
  // })
}

// export functions
module.exports = { getProducts };
