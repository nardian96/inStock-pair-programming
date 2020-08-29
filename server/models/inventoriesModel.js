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

//get list of inventories
function inventoriesList() {
  const data = fs.readFileSync(inventoriesFile);
  return JSON.parse(data);
}

//get single inventory item
function getSingleInventory(id) {
  const array = inventoriesList();
  // console.log(array.filter((item) => item.id === id));
  return array.filter((item) => item.id === id).shift();
}

//delete single inventory item
function deleteInventory(id) {
  const array = inventoriesList();
  const inventoryIndex = array.findIndex((selectedInventory) => {return selectedInventory.id === id});
  delete array[inventoryIndex]
  const updatedArray = array.filter((item) => item !== null)
  fs.writeFileSync(inventoriesFile, JSON.stringify(updatedArray));
  return updatedArray
}


module.exports = { inventoriesList, getSingleInventory, deleteInventory };
