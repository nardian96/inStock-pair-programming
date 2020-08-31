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
  category,
  status,
  quantity
) {
  this.id = uuidv4();
  this.warehouseId = warehouseId;
  this.warehouseName = warehouseName;
  this.itemName = itemName;
  this.description = description;
  this.category = category;
  this.status = status;
  this.quantity = quantity;
}

//get list of inventories
function inventoriesList() {
  const data = fs.readFileSync(inventoriesFile);
  return JSON.parse(data);
}

// Add inventory to json data
function add(data) {
  const inventoryArr = inventoriesList();
  const newInventory = new Inventory(
    data.warehouseId,
    data.warehouseName,
    data.itemName,
    data.description,
    data.category,
    data.status,
    data.quantity
  );
  inventoryArr.push(newInventory);
  fs.writeFileSync(inventoriesFile, JSON.stringify(inventoryArr));
  return newInventory;
}

function update(index, data) {
  const inventoryArr = inventoriesList();
  inventoryArr[index].warehouseId = data.warehouseId;
  inventoryArr[index].warehouseName = data.warehouseName;
  inventoryArr[index].quantity = data.quantity;
  inventoryArr[index].status = data.status;
  inventoryArr[index].category = data.category;
  inventoryArr[index].description = data.description;
  inventoryArr[index].itemName = data.itemName;
  fs.writeFileSync(inventoriesFile, JSON.stringify(inventoryArr));
  return inventoryArr[index];
}

//get single inventory item
function getSingleInventory(id) {
  const array = inventoriesList();
  // console.log(array.filter((item) => item.id === id));
  return array.filter((item) => item.id === id).shift();
}

//delete single inventory item
// function deleteInventory(id) {
//   const array = inventoriesList();
//   const inventoryIndex = array.findIndex((selectedInventory) => {
//     return selectedInventory.id === id;
//   });
//   delete array[inventoryIndex];
//   const updatedArray = array.filter((item) => item !== null);
//   fs.writeFileSync(inventoriesFile, JSON.stringify(updatedArray));
//   return updatedArray;
// }
function deleteInventory(id) {
  const inventoryArray = inventoriesList();
  const inventoryIndex = inventoryArray.findIndex(
    (inventory) => inventory.id === id
  );
  inventoryArray.splice(inventoryIndex, 1);
  fs.writeFileSync(inventoriesFile, JSON.stringify(inventoryArray));
  return inventoryArray;
}

function deleteInventoryByWarehouse(id) {
  const inventoryArray = inventoriesList();

  const newArray = inventoryArray.filter((item) => item.warehouseID !== id);
  fs.writeFileSync(inventoriesFile, JSON.stringify(newArray));
  return newArray;
}

module.exports = {
  inventoriesList,
  getSingleInventory,
  deleteInventory,
  add,
  update,
  deleteInventoryByWarehouse,
};
