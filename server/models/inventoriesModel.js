const fs = require("fs"); // file system module
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// json data to read and write
const inventoriesFile = path.join(__dirname, "../data/inventories.json");

// Inventory Object Constructor
function Inventory(
  warehouseId,
  warehouseName,
  itemName,
  description,
  category
) {
  this.warehouseId = warehouseId;
  this.warehouseName = warehouseName;
  this.itemName = itemName;
  this.description = description;
  this.category = category;
  this.status = "In Stock";
  this.quantity = 0;
}
function inventoriesList(callback) {
  const data = fs.readFileSync(inventoriesFile);
  return JSON.parse(data);
  // fs.readFile(warehouseFile, (err, data) => {
  //   if (err) throw err;
  //   const warehouses = JSON.parse(data);
  //   callback(warehouses)
  // })
}

modules.export = { inventoriesList };
