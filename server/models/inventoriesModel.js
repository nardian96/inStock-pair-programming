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

module.exports = { inventoriesList, add };
