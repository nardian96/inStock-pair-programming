const fs = require("fs"); // file system module
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// json data to read and write
const warehouseFile = path.join(__dirname, "../data/warehouses.json");


// Warehouse Object Constructor
function Warehouse(name, address, city, country, contact) {
  this.id = uuidv4();
  this.name = name;
  this.address = address;
  this.city = city;
  this.country = country;
  this.contact = contact;
}

const list = JSON.parse(fs.readFileSync('./data/warehouses.json'))

//function to post warehouse data
function addWarehouse(data) {
  const warehouseArray = list;
  const newWarehouse = new Warehouse(data.name, data.address, data.city, data.country, data.contact)
  pushNewWarehouse = (newWarehouse) => {
    return {
      id: newWarehouse.id,
      name: newWarehouse.name,
      address: newWarehouse.address,
      city: newWarehouse.city,
      country: newWarehouse.country,
      contact: newWarehouse.contact
    }
  }
  warehouseArray.push(pushNewWarehouse(newWarehouse));
  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseArray));
  return warehouseArray;
}

// function to load warehouse data
function warehouseList(callback) {
  const data = fs.readFileSync(warehouseFile)
  return JSON.parse(data)
}

//export multiple functions
module.exports = { addWarehouse, warehouseList }